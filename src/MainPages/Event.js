import React from 'react';

import { Create, List, Datagrid, TextField, Edit, SimpleForm, TextInput, EditButton, DateField, DateTimeInput,
  NumberField, NumberInput, ImageField, ImageInput, useCreate, useRecordContext} from 'react-admin';


export const EventList = props => (
 <List {...props}>
   <Datagrid rowClick='edit'>
     <NumberField source='id' />
     <TextField source='header' />
     <DateField source='date' />
     <TextField source='place' />
     <ImageField source="picture" title="Picture"/>
     <EditButton />
   </Datagrid>
 </List>
);

const PreviewImage = ({ source }) => {
  let record = useRecordContext();
  if (record.undefined) {
    record = {
      [source]: record.undefined,
    };
  }
  return <ImageField source={source} record={record} title="Picture" />;
};

export const EventEdit = props => (
   <Edit {...props}>
     <SimpleForm>
       <NumberInput disabled source='id' />
       <TextInput source='header' />
       <DateTimeInput source='date' />
       <TextInput source='place'/>
       <ImageInput source='picture'>
          <PreviewImage source='src' />
        </ImageInput>
     </SimpleForm>
   </Edit>
 );

 export const EventCreate = props => {
  const [image, setImage] = React.useState()
  const [imageBlob, setImageBlob] = React.useState('')
  const [create] = useCreate();

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    let res
    reader.onload = function () {
      res = reader.result
      setImageBlob(res)
      return reader.result
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    return res
 }

  const postSave = (data) => {
    data.picture = imageBlob
    console.log('data', data)
    create('user', { data });
  };

  React.useEffect(() => {
    if (image) {
      setImageBlob(getBase64(image))
    }
  }, [image])

  return (
    (
      <>
      <Create>
        <SimpleForm onSubmit={postSave}>
        <TextInput source='header' />
        <DateTimeInput source='date' />
        <TextInput source='place'/>
        <ImageInput source="picture" label="Picture" onChange={(file) => setImage(file)} {...props}>
          <ImageField  source="url" title="title"/>
        </ImageInput>
          <div>
            <img width='60%' src={imageBlob}/>
           </div>
        </SimpleForm>
      </Create>
      </>
    )
  )
};
