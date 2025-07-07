import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const CommentSubmit = () => {
  return (
    <div className="flex flex-col gap-4 w-[700px]">
      <label className="font-medium">امتیاز</label>
      <Select>
        <SelectTrigger className="w-[700px] bg-white">
          <SelectValue placeholder="انتخاب امتیاز" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="light">عالی</SelectItem>
          <SelectItem value="system">خوب</SelectItem>
          <SelectItem value="system">متوسط</SelectItem>
          <SelectItem value="system">ضعیف</SelectItem>
        </SelectContent>
      </Select>
      <label className="font-medium">نظر</label>
      <Textarea placeholder="نظر خود را وارد نمایید" className="w-[700px] bg-white" />
      <Button size={'sm'}>ثبت نظر</Button>
    </div>
  );
};

export default CommentSubmit;
