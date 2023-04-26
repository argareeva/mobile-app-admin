import { Admin, Resource} from "react-admin";
import { defaultTheme, Layout, AppBar, ToggleThemeButton, TitlePortal } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from "./OtherPages/Dashboard";
import AuthProvider from "./OtherPages/AuthProvider.js";
import { CoachList, CoachEdit, CoachCreate } from "./MainPages/Coach";
import { EventList, EventEdit, EventCreate } from "./MainPages/Event";
import { NewsList, NewsEdit, NewsCreate } from "./MainPages/News";
import { SeminarList, SeminarEdit, SeminarCreate } from "./MainPages/Seminar";
import { StudentList, StudentEdit, StudentCreate } from "./MainPages/Student";
import { TournamentList, TournamentEdit, TournamentCreate } from "./MainPages/Tournament";
import { WorkoutList, WorkoutEdit, WorkoutCreate } from "./MainPages/Workout";
import UserIcon from '@mui/icons-material/Group'
import CoachIcon from '@mui/icons-material/Book';
import CompetitionIcon from '@mui/icons-material/Games';
import WorkoutIcon from '@mui/icons-material/Sports';
import SeminarIcon from '@mui/icons-material/Schedule';
import EventIcon from '@mui/icons-material/Event';
import NewsIcon from '@mui/icons-material/Newspaper';
import { createTheme } from '@mui/material';

const darkTheme = createTheme({
    palette: { mode: 'dark' },
});

const MyAppBar = () => (
    <AppBar>
        <TitlePortal />
        <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
    </AppBar>
);

const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;


const dataProvider = jsonServerProvider('http://localhost:5097/api');
const App = () => (
  <Admin layout={MyLayout} dashboard={Dashboard} authProvider={AuthProvider} dataProvider={dataProvider} >
      <Resource name='Student' list={StudentList} edit={StudentEdit} create={StudentCreate} icon={UserIcon}/>
      <Resource name='Coach' list={CoachList} edit={CoachEdit} create={CoachCreate} icon={CoachIcon} />
      <Resource name='Tournament' list={TournamentList} edit={TournamentEdit} create={TournamentCreate} icon={CompetitionIcon} />
      <Resource name='Workout' list={WorkoutList} edit={WorkoutEdit} create={WorkoutCreate} icon={WorkoutIcon} />
      <Resource name='Seminar' list={SeminarList} edit={SeminarEdit} create={SeminarCreate} icon={SeminarIcon} />
      <Resource name='Event' list={EventList} edit={EventEdit} create={EventCreate} icon={EventIcon}/>
      <Resource name='News' list={NewsList} edit={NewsEdit} create={NewsCreate} icon={NewsIcon}/>
  </Admin>
);

export default App;
