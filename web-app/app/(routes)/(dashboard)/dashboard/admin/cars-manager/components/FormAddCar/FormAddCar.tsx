'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';

import { Input } from '@/components/ui/input';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { formSchema } from './FormAddCar.form';
import { UploadButton } from '@/app/utils/uploadthing';
import { useState } from 'react';
import { FormCarProps } from './FormAddCar.types';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function FormAddCart(props: FormCarProps) {
  const { setOpenDialog } = props;
  const [photoUpload, setPhotoUploaded] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      cv: '',
      transmission: '',
      engine: '',
      people: '',
      photo: '',
      type: '',
      priceDay: '',
      isPublish: false,
    },
    mode: 'onChange',
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setOpenDialog(false);
    try {
      await axios.post('/api/car', values);
      toast.success('Car created');
      router.refresh();
    } catch (error) {
      toast.error('Somenthing went wrog');
      console.log(error);
    }
  };

  const { isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* NAME */}
          <Controller
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Tesla" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* CV */}
          <Controller
            name="cv"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Power</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="150 CV"
                    value={field.value ?? ''}
                    onChange={e => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* TRANSMISSION */}
          <Controller
            name="transmission"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transmission</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select transmission" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="Automatic">Automatic</SelectItem>
                    <SelectItem value="Manual">Manual</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* PEOPLE */}
          <Controller
            name="people"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>People Capacity</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select people capacity" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ENGINE */}
          <Controller
            name="engine"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Engine</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select engine type" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="gas">Gas</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="electirc">Electric</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* TYPE */}
          <Controller
            name="type"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type of car" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="coupe">Coupe</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="luxe">Luxury</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* PHOTO */}
          <Controller
            name="photo"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Image</FormLabel>
                <FormControl>
                  {photoUpload ? (
                    <span className="text-sm">Image Uploaded!</span>
                  ) : (
                    <UploadButton
                      className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-3"
                      {...field}
                      endpoint="photo"
                      onClientUploadComplete={res => {
                        form.setValue('photo', res?.[0].url);
                        setPhotoUploaded(true);
                      }}
                      onUploadError={(error: Error) => console.log(error)}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* PRICE */}
          <Controller
            name="priceDay"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price per day</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={field.value ?? ''}
                    onChange={e => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="col-span-2" disabled={!isValid}>
            Create Car
          </Button>
        </div>
      </form>
    </Form>
  );
}
