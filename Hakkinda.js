import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './style';
import Markdown from 'react-native-markdown-display';

const text = `
## Deprem Birlik Uygulaması

Depremzedelere destek olmak amacıyla geliştirilen bu uygulama, ihtiyaç sahiplerine bilgi ve kaynak sağlamak amacıyla oluşturulmuştur.

Herhangi bir öneriniz veya iyileştirmeniz varsa, lütfen Twitter (@ipekbayrak01) aracılığıyla irtibat kurmaktan çekinmeyin.

[github.com/ipekbayrak/deprembirlik](https://github.com/ipekbayrak/deprembirlik)

Bu uygulamanın depremzedelere yardımcı olacağını umuyorum.

 # Deprem Birlik Uygulaması

Bu uygulama, deprem sonrasında insanların kayıp, göçük, envanter, ve barınma duyuruları yapabilmelerine olanak sağlar. Uygulama, aşağıdaki özellikleri içerir:

## Özellikler

1. Göçük Duyurusu

Bu özellik sayesinde kullanıcılar, göçük lokasyonunu, irtibat telefon numarasını ve açıklamayı girerek göçük duyurusu yapabilirler.

2. Kayıp Duyurusu

Bu özellik sayesinde kullanıcılar, kayıp kişinin lokasyonunu, irtibat bilgilerini (isim, soyisim), ailesi mi yoksa kendisi mi aranıyor bilgisini ve açıklamayı girerek kayıp duyurusu yapabilirler.

3. Envanter Duyurusu

Bu özellik sayesinde kullanıcılar, envanter bilgilerini (talep mi arz mı), irtibat telefon numarasını ve açıklamayı girerek envanter duyurusu yapabilirler.

4. Barına Duyurusu

Bu özellik sayesinde kullanıcılar, barınma bilgilerini (şahsi barınak mı yoksa organizasyon barınağı mı), irtibat telefon numarasını ve açıklamayı girerek barınma duyurusu yapabilirler.

Versiyon:0.1.4
`;

const Hakkinda = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
      >
        <Markdown>
          {text}
        </Markdown>
      </ScrollView>
    </View>
  );
};

export default Hakkinda;
