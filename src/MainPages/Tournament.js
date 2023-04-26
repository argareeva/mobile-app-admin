import { Create, List, Datagrid, Edit, EditButton, SimpleForm, TextField, TextInput,
     RichTextField, DateField, DateTimeInput, NumberField, NumberInput, required} from 'react-admin';

export const TournamentList = props => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <NumberField source='id' />
            <TextField source='name' />
            <DateField source='date' />
            <RichTextField source='description' />
            <TextField source='place' />
            <EditButton />
        </Datagrid>
    </List>
);

export const TournamentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput disabled source='id' />
            <TextInput source='name' />
            <DateTimeInput source='date' />
            <TextInput source='description'/>
            <TextInput source='place'/>
        </SimpleForm>
    </Edit>
  );

  export const TournamentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <NumberInput source='id' validate={required()}/>
            <TextInput source='name' />
            <DateTimeInput source='date' />
            <TextInput source='description'/>
            <TextInput source='place'/>
        </SimpleForm>
    </Create>
  );