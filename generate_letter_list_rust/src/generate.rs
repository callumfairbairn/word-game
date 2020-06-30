use crate::constants::{X_DIM, Y_DIM, ALPHABET};
use rand::Rng;

fn generate_letter_list() -> Vec<char> {
    let mut rng = rand::thread_rng();
    c![ALPHABET[rng.gen_range(0, 26) as usize], for x in 0..(X_DIM * Y_DIM)]
}

#[cfg(test)]
mod tests {
    use crate::generate::generate_letter_list;
    use crate::constants::{X_DIM, Y_DIM, DEFAULT_LETTERS};
    use crate::std_ext::capitalise;

    #[test]
    fn returns_a_vec_of_size_x_dim_times_y_dim() {
        assert_eq!((X_DIM * Y_DIM) as usize, generate_letter_list().len());
    }

    #[test]
    fn characters_are_uppercase() {
        let letter_list = generate_letter_list();

        for letter in letter_list.iter() {
            assert_eq!(*letter, capitalise(letter))
        }
    }

    #[test]
    fn characters_are_random() {
        assert_ne!(DEFAULT_LETTERS.to_vec(), generate_letter_list());
        assert_ne!(vec!['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'], generate_letter_list())
    }
}

