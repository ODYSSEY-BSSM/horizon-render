import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { type FormData, formSchema } from '../schemas/form';

export function TestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: FormData) => {
    console.log('폼 데이터:', data);
    alert(`제출된 데이터: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto p-6 space-y-4'>
      <h2 className='text-2xl font-bold mb-4'>React Hook Form 테스트</h2>

      <div>
        <label htmlFor='name' className='block text-sm font-medium mb-1'>
          이름
        </label>
        <input
          {...register('name')}
          type='text'
          id='name'
          className='w-full p-2 border rounded-md'
        />
        {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor='email' className='block text-sm font-medium mb-1'>
          이메일
        </label>
        <input
          {...register('email')}
          type='email'
          id='email'
          className='w-full p-2 border rounded-md'
        />
        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor='age' className='block text-sm font-medium mb-1'>
          나이
        </label>
        <input
          {...register('age', { valueAsNumber: true })}
          type='number'
          id='age'
          className='w-full p-2 border rounded-md'
        />
        {errors.age && <p className='text-red-500 text-sm mt-1'>{errors.age.message}</p>}
      </div>

      <button
        type='submit'
        className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'
      >
        제출
      </button>
    </form>
  );
}
