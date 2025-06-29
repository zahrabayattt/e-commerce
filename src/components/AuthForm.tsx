import useLogin from '@/hooks/use-login';
import useRegister from '@/hooks/use-register';
import type { AuthMode } from '@/pages/AuthPage';
import { LucideLoader2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import toast from 'react-hot-toast';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface IAuthFormProps {
  mode: AuthMode;
}

const AuthForm: React.FC<IAuthFormProps> = ({ mode }) => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirm_Password: '',
  });
  const { mutate: loginMutate, status: loginStatus } = useLogin();
  const { mutate: registerMutate, status: registerStatus } = useRegister();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (mode === 'register') {
      const { username, email, password, confirm_Password } = formValues;
      if (username.trim() && email.trim() && password.trim() && confirm_Password.trim()) {
        registerMutate({ username, email, password, confirm_Password });
      } else {
        toast.error('لطفا تمامی فیلد ها را پر نمایید');
      }
    } else {
      const { email, password } = formValues;

      if (email.trim() && password.trim()) {
        loginMutate({ email, password });
      } else {
        toast.error('لطفا تمامی فیلد ها را پر نمایید');
      }
    }
  };

  return (
    <form className="my-8 space-y-6" onSubmit={handleSubmit}>
      {mode === 'register' && (
        <div className="space-y-3">
          <Label htmlFor="name">نام</Label>
          <Input
            id="name"
            type="text"
            placeholder="نام خود را وارد نمایید"
            value={formValues.username}
            onChange={(e) => setFormValues({ ...formValues, username: e.target.value })}
          />
        </div>
      )}
      <div className="space-y-3">
        <Label htmlFor="email">ایمیل</Label>
        <Input
          id="email"
          type="email"
          placeholder="ایمیل خود را وارد نمایید"
          value={formValues.email}
          onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
        />
      </div>
      <div className="space-y-3">
        <Label htmlFor="password">رمز عبور</Label>
        <Input
          id="password"
          type="password"
          placeholder="رمز عبور خود را وارد نمایید"
          value={formValues.password}
          onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
        />
      </div>
      {mode === 'register' && (
        <div className="space-y-3">
          <Label htmlFor="repeat-password">تکرار رمز عبور</Label>
          <Input
            id="repeat-password"
            type="password"
            placeholder="رمز عبور خود را دوباره وارد نمایید"
            value={formValues.confirm_Password}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                confirm_Password: e.target.value,
              })
            }
          />
        </div>
      )}
      <Button type="submit" className="cursor-pointer text-white">
        {mode === 'login' ? 'ورود' : 'ثبت نام'}
        {loginStatus === 'pending' && <LucideLoader2 className="animate-spin" />}
        {registerStatus === 'pending' && <LucideLoader2 className="animate-spin" />}
      </Button>
    </form>
  );
};

export default AuthForm;
