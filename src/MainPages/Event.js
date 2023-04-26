import { Create, List, Datagrid, TextField, Edit, SimpleForm, TextInput, EditButton, DateField, DateTimeInput, NumberField, NumberInput} from 'react-admin';

export const EventList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <NumberField source='id' />
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
        <NumberInput disabled source='id' />
        <TextInput source='header' />
        <DateTimeInput source='date' />
        <TextInput source='place'/>
      </SimpleForm>
    </Edit>
  );

  export const EventCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <NumberInput source='id' />
        <TextInput source='header' />
        <DateTimeInput source='date' />
        <TextInput source='place'/>
      </SimpleForm>
    </Create>
  );