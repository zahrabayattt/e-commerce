import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { ProductModel } from '@/types/product.model';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/utils';

const CommentSubmit = ({ product }: { product: ProductModel }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const createReview = useMutation({
    mutationFn: async ({ rating, comment }) => {
      try {
        const res = await axiosInstance.post(`/products/${product._id}/reviews`, {
          rating,
          comment,
        });
        return res.data;
      } catch (error) {
        console.error('error:', error.response || error.message);
        throw error;
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createReview.mutate(
      { rating, comment },
      {
        onSuccess: () => {
          setRating(1);
          setComment('');
          toast.success('نظر با موفقیت ثبت شد');
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };
  function handleRatingClick(value: number) {
    setRating(Number(value));
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-3xl max-w-3xl">
      <label className="font-medium">امتیاز</label>
      <Select onValueChange={handleRatingClick}>
        <SelectTrigger className="w-3xl bg-white">
          <SelectValue placeholder="انتخاب امتیاز" />
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-neutral-800">
          <SelectItem value="5">عالی</SelectItem>
          <SelectItem value="4">خیلی خوب</SelectItem>
          <SelectItem value="3">خوب</SelectItem>
          <SelectItem value="2">متوسط</SelectItem>
          <SelectItem value="1">ضعیف</SelectItem>
        </SelectContent>
      </Select>
      <label className="font-medium">نظر</label>
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="نظر خود را وارد نمایید"
        className="w-w-3xl bg-white"
      />
      <Button size={'lg'}> {createReview.isPending ? 'در حال ارسال...' : 'ثبت نظر'}</Button>
    </form>
  );
};

export default CommentSubmit;
