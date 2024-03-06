
'use client';

import { Label, Textarea } from 'flowbite-react';


export default function Message() {
  return (
    <div className='Message'>
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Please drop your message here" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
    </div>
    </div>
  );
}
