import {Modal, Text, View} from 'react-native';
import React from 'react';
import styles from './ProductCreateModal.Style';
import {Formik} from 'formik';
import Button from '../../../../components/button/Button';
import Input from '../../../../components/input/Input';
import * as yup from 'yup';

const CreateProductModal = ({visible, onClose, onCreate}) => {
  const initialValues = {
    name: '',
    unitsInStock: '',
    unitPrice: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required.'),
    unitPrice: yup.number().required('Unit price is Required.'),
    unitsInStock: yup.number().required('Units in stock is required.'),
  });

  const handleCreateProduct = values => {
    values.unitPrice = parseFloat(values.unitPrice);
    values.unitsInStock = parseInt(values.unitsInStock);
    onCreate(values);
    clearInputs();
  };

  const clearInputs = () => {
    initialValues.name = '';
    initialValues.unitsInStock = '';
    initialValues.unitPrice = '';
  };

  return (
    <Modal
      style={styles.modal}
      visible={visible}
      animationType="slide"
      onBackButtonPress={() => {
        clearInputs();
        onClose();
      }}
      coverScreen={true}
      backdropOpacity={0.5}>
      <View style={styles.container}>
        <Text style={styles.title}>New Product</Text>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => handleCreateProduct(values)}>
          {({handleSubmit, handleChange, values, isValid}) => (
            <View>
              <Input
                style={styles.inputs}
                id="name"
                autoCapitalize="none"
                autoComplete="off"
                placeholder="Product Name"
                value={values.name}
                onChangeText={handleChange('name')}
              />
              <Input
                style={styles.inputs}
                id="unitPrice"
                placeholder="Unit Price"
                keyboardType="numeric"
                value={values.unitPrice}
                onChangeText={handleChange('unitPrice')}
              />
              <Input
                style={styles.inputs}
                id="unitsInStock"
                placeholder="Units In Stock"
                keyboardType="numeric"
                o
                value={values.unitsInStock}
                onChangeText={handleChange('unitsInStock')}
              />
              <View style={styles.button_container}>
                <Button
                  style={styles.cancel_button}
                  title="Cancel"
                  onPress={() => {
                    clearInputs();
                    onClose();
                  }}
                />
                <Button
                  style={styles.create_button}
                  title="Create"
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

export default CreateProductModal;
