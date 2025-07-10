import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import useUserProfile from '@/hooks/use-user-profile';
import useUpdateProfile from '@/hooks/use-update-profile';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { data: user, isLoading } = useUserProfile();
  const { mutate: updateProfile, isPending } = useUpdateProfile();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleUpdate = () => {
    if (password && password !== confirmPassword) {
      toast.error('رمز عبور با تکرار آن مطابقت ندارد!');
      return;
    }

    updateProfile({
      username: name,
      email,
      ...(password ? { password } : {}),
    });
  };

  if (isLoading) return <p className="text-center">در حال بارگذاری...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-lg text-center mb-32 font-bold text-2xl ">
        <h2>بروزرسانی پروفایل</h2>
        <div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-right pb-1">
                نام
              </label>
              <Input
                id="name"
                value={name}
                placeholder="نام خود را وارد نمایید"
                onChange={(e) => setName(e.target.value)}
                className='dark:bg-[#3F4043]'
              />
            </div>

            <div className="flex flex-col space-y-1.5 ">
              <label htmlFor="email" className="text-sm font-medium text-right">
                ایمیل
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                placeholder="ایمیل خود را وارد نمایید"
                onChange={(e) => setEmail(e.target.value)}
                className='dark:bg-[#3F4043]'
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium text-right">
                رمز عبور جدید
              </label>
              <Input
                id="password"
                type="password"
                placeholder="رمز عبور خود را وارد نمایید"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='dark:bg-[#3F4043]'
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label htmlFor="confirm-password" className="text-sm font-medium text-right">
                تکرار رمز عبور
              </label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="تکرار رمز عبور خود را وارد نمایید"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='dark:bg-[#3F4043]'
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-5 ">
          <Button
            className="cursor-pointer"
            variant="default"
            size="lg"
            onClick={() => navigate('/orders')}
          >
            سفارشات من
          </Button>
          <Button
            className="cursor-pointer"
            variant="default"
            size="lg"
            onClick={handleUpdate}
            disabled={isPending}
          >
            بروزرسانی
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
