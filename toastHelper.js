import toast from 'react-hot-toast';
import { Alert, Platform } from 'react-native';

const toastHelper = (msg, type) => {
  if (Platform.OS === 'web') {
    switch (type) {
      case 'success':
        toast.success(msg);
        break;
      case 'error':
        toast.error(msg);
        break;
      case 'loading':
        toast.loading(msg);
        break;
      case 'warning':
        toast.warning(msg);
        break;
      default:
        toast(msg);
    }
  } else {
    Alert.alert(msg);
  }
};

export default toastHelper;
