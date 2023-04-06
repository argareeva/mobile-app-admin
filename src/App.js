import { Admin, Resource} from "react-admin";
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from "./OtherPages/Dashboard";
import AuthProvider from "./OtherPages/AuthProvider.js";
import { CoachList, CoachEdit, CoachCreate } from "./MainPages/Coach";
import { EventList, EventEdit, EventCreate } from "./MainPages/Event";
import { NewsList, NewsEdit, NewsCreate } from "./MainPages/News";
import { SeminarList, SeminarEdit, SeminarCreate } from "./MainPages/Seminar";
import { StudentList, StudentEdit, StudentCreate } from "./MainPages/Student";
import { TournamentList, TournamentEdit, TournamentCreate } from "./MainPages/Tournament";
import { WorkoutList, WourkoutEdit, WorkoutCreate } from "./MainPages/Workout";
import UserIcon from '@mui/icons-material/Group' 
import CoachIcon from '@mui/icons-material/Book';
import CompetitionIcon from '@mui/icons-material/Sports';
import EventIcon from '@mui/icons-material/Event';

const dataProvider = jsonServerProvider('http://localhost:5097/api');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={dataProvider} >
      <Resource name='Student' list={StudentList} edit={StudentEdit} create={StudentCreate} icon={UserIcon}/>
      <Resource name='Coach' list={CoachList} edit={CoachEdit} create={CoachCreate} icon={CoachIcon} />
      <Resource name='Tournament' list={TournamentList} edit={TournamentEdit} create={TournamentCreate} icon={CompetitionIcon} />
      <Resource name='Workout' list={WorkoutList} edit={WourkoutEdit} create={WorkoutCreate} icon={CompetitionIcon} />
      <Resource name='Seminar' list={SeminarList} edit={SeminarEdit} create={SeminarCreate} icon={CompetitionIcon} />
      <Resource name='Event' list={EventList} edit={EventEdit} create={EventCreate} icon={EventIcon}/>
      <Resource name='News' list={NewsList} edit={NewsEdit} create={NewsCreate} icon={EventIcon}/>
  </Admin>
);

export default App;
