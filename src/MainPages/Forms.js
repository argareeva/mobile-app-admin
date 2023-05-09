import { List, Datagrid, TextField, DateTimeInput, RichTextField, NumberField, EmailField } from 'react-admin';

export const Feedback = props => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <NumberField source='id' />
            <TextField source='fullName' />
            <TextField source='phoneNumber' />
            <EmailField source='email' />
            <RichTextField source='content' />
        </Datagrid>
    </List>
);

export const TournamentForm = props => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <NumberField source='id' />
            <TextField source='fullName' />
            <DateTimeInput source='birthday' />
            <TextField source='phoneNumber' />
            <EmailField source='email' />
            <TextField source='category' />
        </Datagrid>
    </List>
);

export const TrialForm = props => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <NumberField source='id' />
            <TextField source='fullName' />
            <DateTimeInput source='birthday' />
            <TextField source='phoneNumber' />
            <EmailField source='email' />
            <DateTimeInput source='date' />
            <TextField source='comment' />
        </Datagrid>
    </List>
);
