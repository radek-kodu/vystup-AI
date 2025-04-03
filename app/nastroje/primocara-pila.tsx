// app/nastroje/primocara-pila.tsx
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import Pil1 from '../../assets/Pil1';
import Pil2 from '../../assets/Pil2';
import Pil3 from '../../assets/Pil3';
import Pil4 from '../../assets/Pil4';

export default function PrimocaraPilaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title and Subtitle */}
        <Text style={styles.title}>
          Jak Bezpečně a Efektivně Pracovat s Přímočarou Pilou
        </Text>
        <Text style={styles.subtitle}>
          Váš jednoduchý průvodce pro správné ovládání a prevenci úrazů
        </Text>
        <View style={styles.separator} />

        {/* Section 1 */}
        <Text style={styles.heading}>1. Seznamte se s Pilem</Text>
        <Text style={styles.sectionHeading}>Co je přímočará pila?</Text>
        <Text style={styles.paragraph}>
          Přímočará pila je elektrický nástroj určený k přesnému řezání dřeva.
          Pomocí otáčejícího se kotouče se snadno a rychle připraví materiál pro různé řemeslné projekty – od drobných oprav až po stavbu nábytku.
        </Text>
        <Text style={styles.imageLabel}>Obrázek 1: Ilustrace přímočaré pily</Text>
        <View style={styles.imageContainer}>
          <Pil1 width="100%" height={200} />
        </View>
        <Text style={styles.paragraph}>
          *(Vložte jednoduchou grafiku nebo fotografii přímočaré pily s vyznačením hlavních částí, jako je motor, řezací kotouč, ochranný kryt a ergonomická držadla.)*
        </Text>
        <Text style={styles.sectionHeading}>Kdy a proč ji používat?</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>• Řezání dřeva na přesné kusy</Text>
          <Text style={styles.bulletItem}>• Příprava materiálu pro stavbu a řemeslné projekty</Text>
          <Text style={styles.bulletItem}>• Práce, kde je potřeba preciznost a stabilita</Text>
        </View>
        <View style={styles.separator} />

        {/* Section 2 */}
        <Text style={styles.heading}>2. Hlavní Části a Jejich Funkce</Text>
        <Text style={styles.paragraph}>
          Předtím než pila uvedete do provozu, je důležité pochopit, jaké jsou její hlavní části a jak fungují:
        </Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            • <Text style={styles.bold}>Motor a řezací kotouč:</Text> Motor pohání kotouč, který díky speciálně navrženým zubům řezá dřevo hladce a efektivně.
          </Text>
          <Text style={styles.bulletItem}>
            • <Text style={styles.bold}>Ochranné kryty:</Text> Tyto prvky chrání vaše ruce před nechtěným kontaktem s kotoučem a výrazně snižují riziko úrazu.
          </Text>
          <Text style={styles.bulletItem}>
            • <Text style={styles.bold}>Držadla a ergonomický design:</Text> Pevná a dobře tvarovaná držadla zajišťují stabilní úchop a pohodlné ovládání, což je klíčové pro bezpečnost při práci.
          </Text>
        </View>
        <Text style={styles.imageLabel}>Obrázek 2: Schéma s vyznačením částí pily</Text>
        <View style={styles.imageContainer}>
          <Pil2 width="100%" height={200} />
        </View>
        <Text style={styles.paragraph}>
          *(Vložte jednoduché schéma, kde jsou jasně označeny motor, kotouč, ochranné kryty a držadla.)*
        </Text>
        <View style={styles.separator} />

        {/* Section 3 */}
        <Text style={styles.heading}>3. Bezpečnostní Tipy a Správné Používání</Text>
        <Text style={styles.paragraph}>
          Práce s pilou vyžaduje pečlivé dodržování bezpečnostních pravidel. Zde jsou základní tipy, které vám pomohou vyhnout se nehodám:
        </Text>
        <Text style={styles.subHeading}>Před začátkem práce:</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            • <Text style={styles.bold}>Zkontrolujte stav pily:</Text> Ujistěte se, že je řezací kotouč nepoškozený a že ochranné kryty jsou správně nasazené.
          </Text>
          <Text style={styles.bulletItem}>
            • <Text style={styles.bold}>Připravte si pracovní prostor:</Text> Mějte čistou a dobře osvětlenou pracovní plochu, kde nebudou žádné překážky.
          </Text>
          <Text style={styles.bulletItem}>
            • <Text style={styles.bold}>Používejte ochranné pomůcky:</Text>
            <Text style={styles.italic}> Ochranné brýle, rukavice, sluchátka, protiskluzová obuv.</Text>
          </Text>
        </View>
        <Text style={styles.subHeading}>Během řezání:</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            • Držte obě ruce pevně na držadlech a nikdy nevkládejte ruce blízko řezacího kotouče.
          </Text>
          <Text style={styles.bulletItem}>
            • Pila by měla pracovat v plynulém a rovnoměrném pohybu – nevytvářejte prudké pohyby.
          </Text>
          <Text style={styles.bulletItem}>
            • V případě neobvyklých zvuků nebo vibrací okamžitě zastavte práci a zkontrolujte nástroj.
          </Text>
        </View>
        <Text style={styles.subHeading}>Po ukončení práce:</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            • Nechte pilu několik sekund běžet, než ji vypnete.
          </Text>
          <Text style={styles.bulletItem}>
            • Vypněte nástroj a odpojte jej od zdroje napájení před údržbou či čištěním.
          </Text>
        </View>
        <Text style={styles.imageLabel}>Obrázek 3: Infografika bezpečnostních tipů</Text>
        <View style={styles.imageContainer}>
          <Pil3 width="100%" height={200} />
        </View>
        <Text style={styles.paragraph}>
          *(Vložte grafiku, která vizuálně znázorní klíčové bezpečnostní body – kontrola pily, používání OOPP, správný úchop a bezpečnostní postup při řezání.)*
        </Text>
        <View style={styles.separator} />

        {/* Section 4 */}
        <Text style={styles.heading}>4. Rady pro Správnou Techniku Řezání a Údržbu</Text>
        <Text style={styles.subHeading}>Správný postup řezání:</Text>
        <View style={styles.numberedList}>
          <Text style={styles.numberedItem}>
            1. <Text style={styles.bold}>Příprava:</Text>
          </Text>
          <Text style={styles.indentedItem}>
            - Zapněte pilu a nechte ji dosáhnout optimální otáčky.
          </Text>
          <Text style={styles.indentedItem}>
            - Ujistěte se, že materiál je bezpečně připevněn proti pilovému kotouči.
          </Text>
          <Text style={styles.numberedItem}>
            2. <Text style={styles.bold}>Řezání:</Text>
          </Text>
          <Text style={styles.indentedItem}>
            - Umístěte materiál rovnoměrně a držte ho oběma rukama.
          </Text>
          <Text style={styles.indentedItem}>
            - Řiďte se přímou a plynulou linií řezu, aby nedošlo k zaseknutí pily.
          </Text>
          <Text style={styles.numberedItem}>
            3. <Text style={styles.bold}>Ukončení:</Text>
          </Text>
          <Text style={styles.indentedItem}>
            - Po dokončení řezu nechte pilu několik sekund běžet, poté ji vypněte a nechte ji úplně zastavit před manipulací s materiálem.
          </Text>
        </View>
        <Text style={styles.subHeading}>Údržba pily:</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bulletItem}>
            • <Text style={styles.bold}>Čištění:</Text> Po každém použití vyčistěte pilu od pilin a prachu.
          </Text>
          <Text style={styles.bulletItem}>
            • <Text style={styles.bold}>Kontrola:</Text> Pravidelně kontrolujte řezací kotouč a další pohyblivé části.
          </Text>
          <Text style={styles.bulletItem}>
            • <Text style={styles.bold}>Skladování:</Text> Uložte pilu na suchém místě, aby nedošlo k poškození vlhkostí či prachem.
          </Text>
        </View>
        <Text style={styles.imageLabel}>Obrázek 4: Diagram správné techniky řezu a údržby</Text>
        <View style={styles.imageContainer}>
          <Pil4 width="100%" height={200} />
        </View>
        <Text style={styles.paragraph}>
          *(Vložte diagram, který ukazuje správnou techniku řezu a kroky údržby – čištění, kontrola a bezpečné skladování.)*
        </Text>
        <View style={styles.separator} />

        {/* Summary */}
        <Text style={styles.heading}>Shrnutí</Text>
        <Text style={styles.paragraph}>
          Tento přívětivý průvodce vám poskytuje veškeré základní informace, které potřebujete k bezpečnému a efektivnímu používání přímočaré pily. Pamatujte, že klíčem k úspěchu je důkladná příprava, dodržování bezpečnostních pravidel a pravidelná údržba. Vždy si dejte záležet na svém bezpečí, a pokud máte jakékoliv pochybnosti, neváhejte vyhledat radu od zkušenějších řemeslníků.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4EF',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#405B73',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#405B73',
    textAlign: 'center',
    marginBottom: 16,
  },
  separator: {
    borderBottomColor: '#405B73',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#405B73',
    marginBottom: 8,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#405B73',
    marginVertical: 8,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#405B73',
    marginVertical: 8,
  },
  paragraph: {
    fontSize: 14,
    color: '#405B73',
    marginBottom: 8,
    lineHeight: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  bulletList: {
    marginLeft: 16,
    marginBottom: 8,
  },
  bulletItem: {
    fontSize: 14,
    color: '#405B73',
    marginBottom: 4,
  },
  numberedList: {
    marginLeft: 16,
    marginBottom: 8,
  },
  numberedItem: {
    fontSize: 14,
    color: '#405B73',
    marginBottom: 4,
  },
  indentedItem: {
    fontSize: 14,
    color: '#405B73',
    marginLeft: 16,
    marginBottom: 4,
  },
  imageLabel: {
    fontSize: 14,
    color: '#405B73',
    fontStyle: 'italic',
    marginVertical: 8,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
});
