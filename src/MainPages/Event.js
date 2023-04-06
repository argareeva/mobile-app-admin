import { Create, List, Datagrid, TextField, DateField, DateInput, Edit, SimpleForm, TextInput, EditButton, DateField, DateInput} from 'react-admin';

export const EventList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='header' />
      <DateField source='date' />
      <TextField source='place' />
      <EditButton />
    </Datagrid>
  </List>
);

export const EventEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='header' />
        <DateInput source='date' />
        <TextInput source='place'/>
      </SimpleForm>
    </Edit>
  );

  export const EventCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source='header' />
        <DateInput source='date' />
        <TextInput source='place'/>
      </SimpleForm>
    </Create>
  );