import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

// Importing your custom components and hooks
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useUpdateUser } from '@/hooks/useUpdateUser';
import type { UserUpdatePayload } from '@/types/UserUpdatePayload';

const ProfilePage = () => {
  // State for input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Use the custom hook for the mutation
  const { mutate, isPending } = useUpdateUser();

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (password && password !== confirmPassword) {
      setError('رمزهای عبور یکسان نیستند.');
      return;
    }

    const payload: UserUpdatePayload = {};
    if (name) payload.name = name;
    if (email) payload.email = email;
    if (password) payload.password = password;

    if (Object.keys(payload).length === 0) {
      setError('برای بروزرسانی حداقل یک فیلد را پر کنید.');
      return;
    }

    mutate(payload);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 p-4 font-sans" dir="rtl">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>بروز رسانی پروفایل</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-right">نام</label>
                <Input id="name" placeholder="نام خود را وارد نمایید" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-right">ایمیل</label>
                <Input id="email" type="email" placeholder="ایمیل خود را وارد نمایید" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="password" className="text-sm font-medium text-right">رمز عبور</label>
                <Input id="password" type="password" placeholder="رمز عبور جدید (اختیاری)" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="confirm-password" className="text-sm font-medium text-right">تکرار رمز عبور</label>
                <Input id="confirm-password" type="password" placeholder="تکرار رمز عبور جدید" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              
              <div className="h-5 text-center">
                {error && <p className="text-red-600 text-sm">{error}</p>}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit" variant="default" size="lg" disabled={isPending}>
              {isPending && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              بروزرسانی
            </Button>
            <Button type="button" variant="outline" size="lg">سفارشات من</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default ProfilePage;
