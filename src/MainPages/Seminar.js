import { Create, List, Datagrid, Edit, EditButton, SimpleForm, TextField, TextInput,
  RichTextField, DateField, DateTimeInput,  NumberField, NumberInput} from 'react-admin';

export const SeminarList = props => (
 <List {...props}>
   <Datagrid rowClick='edit'>
     <NumberField source='id' />
     <TextField source='name' />
     <RichTextField source='description' />
     <DateField source='date' />
     <TextField source='place' />
     <EditButton />
   </Datagrid>
 </List>
);

export const SeminarEdit = props => (
   <Edit {...props}>
     <SimpleForm>
       <NumberInput disabled source='id' />
       <TextInput source='name' />
       <TextInput source='description'/>
       <DateTimeInput source='date' />
       <TextInput source='place'/>
     </SimpleForm>
   </Edit>
 );

 export const SeminarCreate = props => (
   <Create {...props}>
     <SimpleForm>
       <TextInput source='name' />
       <TextInput source='description'/>
       <DateTimeInput source='date' />
       <TextInput source='place'/>
     </SimpleForm>
   </Create>
 );