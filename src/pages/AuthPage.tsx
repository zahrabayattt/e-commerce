import AuthForm from '@/components/AuthForm';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import authLight from '../assets/images/auth-light.png';
import authDark from '../assets/images/auth-dark.png';

export type AuthMode = 'login' | 'register';

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState<AuthMode>(
    () => (searchParams.get('mode') as AuthMode) || 'login'
  );

  useEffect(() => {
    setMode(searchParams.get('mode') as AuthMode);
  }, [searchParams]);

  return (
    <section className="flex flex-col justify-center gap-12 overflow-hidden md:flex-row-reverse">
      <div className="md:flex-2">
        <img src={authLight} className="dark:hidden" alt="Auth image" />
        <img src={authDark} className="hidden dark:block" alt="Auth image" />
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-bold">{mode === 'login' ? 'ورود' : 'ثبت نام'}</h1>
        <AuthForm mode={mode} />
        <div className="flex items-center gap-2">
          <p className="text-sm">{mode === 'login' ? 'عضو نیستید؟' : 'عضو هستید؟'}</p>
          <Button
            size="sm"
            variant="link"
            className="cursor-pointer"
            onClick={() => {
              if (mode === 'login') setSearchParams('mode=register');
              else setSearchParams('mode=login');
            }}
          >
            {mode === 'login' ? 'ثبت نام' : 'ورود'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
