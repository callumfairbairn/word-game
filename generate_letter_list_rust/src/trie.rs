//! # A trie that can be saved to and loaded from a file
//!
//! This crate implements a Trie with char keys.
//! The trie can be saved to and loaded from a file on the local filesystem.
//! This allows the user to persist the trie between executions.
//!
//! Basic example:
//!
//! ```ignore
//! let trie_file = "/path/to/trie-file";
//! let mut trie = fs_trie::Trie::default();
//! trie.insert("abc", String::from("contents1"));
//! trie.insert("abd", String::from("contents2"));
//! trie.insert("hello", String::from("world"));
//! trie.save_to_file(trie_file).expect(
//!     "Couldn't save trie to file",
//! );
//! let trie2 = fs_trie::Trie::load_from_file(trie_file).expect("Couldn't load trie from file");
//! assert_eq!(trie, trie2);
//! ```

#![deny(missing_docs)]

use std::fs::OpenOptions;
use std::io::{self, BufReader, BufWriter};
use std::collections::HashMap;

use bincode::{serialize_into, deserialize_from, Infinite};

pub use bincode::Error as BincodeError;

type Result<T> = std::result::Result<T, BincodeError>;

/// The Trie struct. The children are a `std::collections::HashMap` of other Tries.
#[derive(Default, Debug, PartialEq, Serialize, Deserialize, Clone)]
pub struct Trie<V> {
    key: Option<char>,
    children: HashMap<Option<char>, Trie<V>>,
    contents: Option<V>,
}

impl<V> Trie<V> {
    /// Returns a Trie<V> from a file - can be empty or a previously saved trie.
    /// The type of V (the Trie values) must be known
    pub fn load_from_file(path: &str) -> Result<Self>
        where
                for<'de> V: serde::Serialize + serde::Deserialize<'de>,
    {
        let f = OpenOptions::new()
            .read(true)
            .write(true)
            .create(true)
            .open(path)
            .expect("Couldn't open trie file");
        let mut br = BufReader::new(f);
        match deserialize_from(&mut br, Infinite) {
            Ok(x) => Ok(x),
            Err(box bincode::ErrorKind::IoError(e)) => {
                if e.kind() == io::ErrorKind::UnexpectedEof {
                    return Ok(Trie {
                        key: None,
                        children: HashMap::new(),
                        contents: None,
                    });
                }
                Err(Box::new(bincode::ErrorKind::IoError(e)))
            }
            Err(e) => Err(e),
        }
    }

    /// Inserts a Trie entry. The &str key is split into its chars to generate
    /// the children.
    pub fn insert(&mut self, key: &str, contents: V) -> Option<V> {
        let mut chars = key.chars();
        let mut key_i_need = chars.next();
        if self.key == key_i_need {
            if chars.size_hint().0 == 0 {
                let ret = self.contents.take();
                self.contents = Some(contents);
                return ret;
            }
            key_i_need = chars.next();
        }
        if let Some(c) = self.children.get_mut(&key_i_need) {
            return c.insert(chars.as_str(), contents);
        }
        let mut trie = Trie {
            key: key_i_need,
            children: HashMap::new(),
            contents: None,
        };
        trie.insert(chars.as_str(), contents);
        self.children.insert(key_i_need, trie);
        None
    }

    /// Get an entry from the Trie. Traverses the trie with the chars in the key.
    pub fn get(&self, key: &str) -> Option<&V> {
        let mut chars = key.chars();
        let mut key_i_need = chars.next();
        if self.key == key_i_need {
            if chars.size_hint().0 == 0 {
                return self.contents.as_ref();
            }
            key_i_need = chars.next();
        }
        if let Some(c) = self.children.get(&key_i_need) {
            return c.get(chars.as_str());
        }
        None
    }

    /// Save the Trie to a file.
    pub fn save_to_file(&mut self, path: &str) -> Result<()>
        where
                for<'de> V: serde::Serialize + serde::Deserialize<'de>,
    {
        let f = OpenOptions::new()
            .read(true)
            .write(true)
            .create(true)
            .open(path)
            .expect("Couldn't open trie file");
        let mut bw = BufWriter::new(f);
        serialize_into(&mut bw, self, Infinite)
    }
}
