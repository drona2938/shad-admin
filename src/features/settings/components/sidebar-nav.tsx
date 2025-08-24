'use client'

import { useState, type JSX } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type SidebarNavProps = React.HTMLAttributes<HTMLElement> & {
  items: {
    href: string
    title: string
    icon: JSX.Element
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [val, setVal] = useState(pathname ?? '/settings')

  const handleSelect = (e: string) => {
    setVal(e)
    router.push(e)
  }

  return (
    <div className='space-y-2'>
      <div className='block sm:hidden'>
        <Select value={val} onValueChange={handleSelect}>
          <SelectTrigger className='h-12 sm:hidden'>
            <SelectValue placeholder='Choose an option' />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.href} value={item.href}>
                <div className='flex gap-x-4 px-2 py-1'>
                  <span className='scale-125'>{item.icon}</span>
                  <span className='text-md'>{item.title}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='hidden sm:block'>
        <ScrollArea className='h-full px-1'>
          <nav className={cn('flex flex-col gap-2', className)} {...props}>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  pathname === item.href
                    ? 'bg-muted hover:bg-muted'
                    : 'hover:bg-transparent hover:underline',
                  'justify-start gap-2'
                )}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </div>
  )
}
