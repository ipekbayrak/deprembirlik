import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const Hakkinda = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Deprem destek uygulamasına hoş geldiniz.
        {'\n\n'}
        "ipekbayrak" tarafından depremzedelere destek olmak amacıyla geliştirilen bu uygulama, ihtiyaç sahiplerine bilgi ve kaynak sağlamak amacıyla oluşturulmuştur.
        {'\n\n'}
        Herhangi bir öneriniz veya iyileştirmeniz varsa, lütfen Twitter (@ipekbayrak01) veya GitHub (ipekbayrak) aracılığıyla irtibat kurmaktan çekinmeyin.
        {'\n\n'}
        Desteğiniz için teşekkür ederim. Bu uygulamanın depremzedelere yardımcı olacağını umuyorum.
      </Text>
    </View>
  );
};

export default Hakkinda;
