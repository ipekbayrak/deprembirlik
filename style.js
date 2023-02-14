import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF'
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  },
  header: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  saveButton: {
    backgroundColor: '#3f51b5',
    padding: 12,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  email: {
    fontSize: 16,
    color: 'gray'
  }
});

export const announcementStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  announcementContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    marginTop: 8
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#3f51b5',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
