import { Create, List, Datagrid, TextField, DateField, DateInput, Edit, SimpleForm, TextInput, EditButton, DateField, DateInput} from 'react-admin';

export const TournamentList = props => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <TextField source='id' />
            <TextField source='name' />
            <DateField source='date' />
            <TextField source='description' />
            <TextField source='place' />
            <EditButton />
        </Datagrid>
    </List>
);

export const TournamentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='name' />
            <DateInput source='date' />
            <TextInput source='description'/>
            <TextInput source='place'/>
        </SimpleForm>
    </Edit>
  );

  export const TournamentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <DateInput source='date' />
            <TextInput source='description'/>
            <TextInput source='place'/>
        </SimpleForm>
    </Create>
  );