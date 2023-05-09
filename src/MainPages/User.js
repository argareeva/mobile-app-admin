import React from 'react';

import {
  Create, List, Datagrid, Edit, EditButton, SimpleForm, BooleanField, BooleanInput, ImageField, ImageInput, Filter, ReferenceInput,
  EmailField, TextField, TextInput, PasswordInput, NumberField, NumberInput, email, SelectInput, useCreate, useRecordContext
} from 'react-admin';

const choices = [
  { name: 'student' },
  { name: 'coach' },
  { name: 'admin' }
];

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput label='User' source='id' reference='User' allowEmpty>
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
);

export const UserList = props => (
  <List filter={<UserFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <NumberField source='id' />
      <TextField source='fullName' />
      <EmailField source='email' />
      <TextField source='password' />
      <TextField source='role' />
      <TextField source='dan' />
      <TextField source='category' />
      <TextField source='direction' />
      <BooleanField source='participation' />
      <TextField source='medals' />
      <ImageField source="picture" title="Picture" />
      <TextField source='description' />
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

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput disabled source='id' />
      <TextInput source='fullName' />
      <TextInput source='email' validate={email()} />
      <PasswordInput disabled source='password' />
      <SelectInput source='role' choices={choices} optionValue='name' />
      <TextInput source='dan' />
      <TextInput source='category' />
      <TextInput source='direction' />
      <BooleanInput source='participation' />
      <TextInput source='medals' />
      <ImageInput source='picture'>
        <PreviewImage source='src' />
      </ImageInput>
      <TextInput source='description' />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => {
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
            <TextInput source='fullName' />
            <TextInput source='email' validate={email()} />
            <PasswordInput source='password' />
            <SelectInput source='role' choices={choices} optionValue='name' />
            <TextInput source='dan' />
            <TextInput source='category' />
            <TextInput source='direction' />
            <BooleanInput source='participation' />
            <TextInput source='medals' />
            <ImageInput source="picture" label="Related pictures" onChange={(file) => setImage(file)} {...props}>
              <ImageField source="url" title="title" />
            </ImageInput>
            <div>
              <img width='60%' src={imageBlob} />
            </div>
            <TextInput source='description' />
          </SimpleForm>
        </Create>
      </>
    )
  )
};