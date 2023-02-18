import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Hakkinda = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Deprem Birlik uygulamasına hoş geldiniz.
        {'\n\n'}
        Depremzedelere destek olmak amacıyla geliştirilen bu uygulama, ihtiyaç sahiplerine bilgi ve kaynak sağlamak amacıyla oluşturulmuştur.
        {'\n\n'}
        Herhangi bir öneriniz veya iyileştirmeniz varsa, lütfen Twitter (@ipekbayrak01) aracılığıyla irtibat kurmaktan çekinmeyin.
        {'\n\n'}
        <code>github.com/ipekbayrak/deprembirlik</code>
        {'\n\n'}
        Bu uygulamanın depremzedelere yardımcı olacağını umuyorum.
      </Text>
      <Text style={{ padding: 5 }}>Versiyon:0.1.2</Text>
    </View>
  );
};

export default Hakkinda;
