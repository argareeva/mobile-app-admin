import React from 'react';

import {
  Create, List, Datagrid, Edit, EditButton, SimpleForm, TextField, TextInput, ImageField, ImageInput, ReferenceInput, SelectInput,
  RichTextField, DateField, DateTimeInput, NumberField, NumberInput, useCreate, useRecordContext, Filter
} from 'react-admin';

const TournamentFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput label='Tournament' source='id' reference='Tournament' allowEmpty>
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
);

export const TournamentList = props => (
  <List filter={<TournamentFilter />}{...props}>
    <Datagrid rowClick='edit'>
      <NumberField source='id' />
      <TextField source='name' />
      <DateField source='date' />
      <RichTextField source='description' />
      <TextField source='place' />
      <ImageField source="picture" title="Picture" />
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

export const TournamentEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <NumberInput disabled source='id' />
      <TextInput source='name' />
      <DateTimeInput source='date' />
      <TextInput source='description' />
      <TextInput source='place' />
      <ImageInput source='picture'>
        <PreviewImage source='src' />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const TournamentCreate = props => {
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
            <TextInput source='name' />
            <DateTimeInput source='date' />
            <TextInput source='description' />
            <TextInput source='place' />
            <ImageInput source="picture" label="Picture" onChange={(file) => setImage(file)} {...props}>
              <ImageField source="url" title="title" />
            </ImageInput>
            <div>
              <img width='60%' src={imageBlob} />
            </div>
          </SimpleForm>
        </Create>
      </>
    )
  )
};
