import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { SearchIcon1 } from './SearchIcon1';
import { ReactComponent as search } from './searchIcon.svg';
const SearchIcon = () => {
  return <SearchIcon1
  data-testid="searchIcon"
  sx={{ backgroundBlendMode:'#042330',}}
  />;
};

export default SearchIcon;
