import * as yup from 'yup';

export let RegisterSchema = yup.object({
  fullname: yup.string().required('Ad bos ola bilmez'),
  username: yup.string().required('isdifadeci adi bos ola bilmez'),
  email: yup.string().email('E-poct duzgen deyil').required('E-poct mutleq olmalidir'),
  password: yup.string().required('sifre yazin '),
  passwordRepeate: yup
    .string()
    .required('sifre tekrari mutleqdir')
    .oneOf([yup.ref('password')], 'sifreler uygun deyil'),
});
