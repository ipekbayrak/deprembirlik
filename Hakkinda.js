import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Hakkinda = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Deprem Destek uygulamasına hoş geldiniz.
        {'\n\n'}
        Depremzedelere destek olmak amacıyla geliştirilen bu uygulama, ihtiyaç sahiplerine bilgi ve kaynak sağlamak amacıyla oluşturulmuştur.
        {'\n\n'}
        Herhangi bir öneriniz veya iyileştirmeniz varsa, lütfen Twitter (@ipekbayrak01) aracılığıyla irtibat kurmaktan çekinmeyin.
        {'\n\n'}
        <code>github.com/ipekbayrak/depremdestek</code>
        {'\n\n'}
        Bu uygulamanın depremzedelere yardımcı olacağını umuyorum.
      </Text>
    </View>
  );
};

export default Hakkinda;
