import { Admin, Resource } from "react-admin";
import { defaultTheme, Layout, AppBar, ToggleThemeButton, TitlePortal } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from "./OtherPages/Dashboard";
import AuthProvider from "./OtherPages/AuthProvider.js";
import { EventList, EventEdit, EventCreate } from "./MainPages/Event";
import { NewsList, NewsEdit, NewsCreate } from "./MainPages/News";
import { SeminarList, SeminarEdit, SeminarCreate } from "./MainPages/Seminar";
import { UserList, UserEdit, UserCreate } from "./MainPages/User";
import { TournamentList, TournamentEdit, TournamentCreate } from "./MainPages/Tournament";
import { WorkoutList, WorkoutEdit, WorkoutCreate } from "./MainPages/Workout";
import { Feedback, TournamentForm, TrialForm } from "./MainPages/Forms";
import UserIcon from '@mui/icons-material/Group'
import CompetitionIcon from '@mui/icons-material/Games';
import WorkoutIcon from '@mui/icons-material/Sports';
import SeminarIcon from '@mui/icons-material/Schedule';
import EventIcon from '@mui/icons-material/Event';
import NewsIcon from '@mui/icons-material/Newspaper';
import FeedbackIcon from '@mui/icons-material/Feedback';
import TournamentFormIcon from '@mui/icons-material/SportsScore';
import TrialFormIcon from '@mui/icons-material/AccountCircle';
import { createTheme } from '@mui/material';
import { fetchUtils } from 'react-admin';


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

const httpClient = (url, options = {}) => {
    console.log('here')
    const optionsNew = {
        ...options,
        headers: new Headers({ Accept: 'application/json' }),
    };
    const token = localStorage.getItem('admin-token');
    console.log('token', token)
    if (token) {
        optionsNew.headers.set('Authorization', `Bearer ${token}`);
    }

    return fetchUtils.fetchJson(url, optionsNew);
};


const dataProvider = jsonServerProvider('http://localhost:7166/api', httpClient);
const App = () => (
    <Admin layout={MyLayout} dashboard={Dashboard} authProvider={AuthProvider} dataProvider={dataProvider} >
        <Resource name='User' list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
        <Resource name='Tournament' list={TournamentList} edit={TournamentEdit} create={TournamentCreate} icon={CompetitionIcon} />
        <Resource name='Workout' list={WorkoutList} edit={WorkoutEdit} create={WorkoutCreate} icon={WorkoutIcon} />
        <Resource name='Seminar' list={SeminarList} edit={SeminarEdit} create={SeminarCreate} icon={SeminarIcon} />
        <Resource name='Event' list={EventList} edit={EventEdit} create={EventCreate} icon={EventIcon} />
        <Resource name='News' list={NewsList} edit={NewsEdit} create={NewsCreate} icon={NewsIcon} />
        <Resource name='Tournament forms' list={TournamentForm} icon={TournamentFormIcon} />
        <Resource name='Trial forms' list={TrialForm} icon={TrialFormIcon} />
        <Resource name='Feedback forms' list={Feedback} icon={FeedbackIcon} />
    </Admin>
);

export default App;