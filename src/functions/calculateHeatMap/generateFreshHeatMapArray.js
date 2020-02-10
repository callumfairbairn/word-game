import { X_DIM, Y_DIM } from '../../common/constants'

export const generateFreshHeatMapArray = () => {
  return Array(X_DIM).fill(Array(Y_DIM).fill(0))
}
