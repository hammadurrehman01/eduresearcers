import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, MessagesSquare, Send } from 'lucide-react';
import { IoChatbubbleEllipses } from "react-icons/io5";
import Image from 'next/image';

const FaqSection: React.FC = () => {
  // Initialize openItem to "item-1" to make the first accordion active by default
  const [openItem, setOpenItem] = useState<string | null>("item-1");

  const toggleItem = (value: string) => setOpenItem(openItem === value ? null : value);

  const renderAccordionTrigger = (value: string, text: string) => (
    <AccordionTrigger
      className='mt-3 scale-95 md:scale-100 bg-zinc-50 dark:bg-zinc-800 shadow-lg font-semibold rounded-lg px-4 w-[350px] lg:w-[500px] xl:w-[600px] md:w-[600px]'
      onClick={() => toggleItem(value)}
    >
      {text}
    </AccordionTrigger>
  );

  const renderAccordionContent = (value: string, content: string) => (
    openItem === value && (
      <AccordionContent className='  text-muted-foreground font-semibold pt-3 px-4 w-[350px] md:w-[500px] '>
        {content}
      </AccordionContent>
    )
  );

  const handleGetStartedClick = () => {
    if (window.Tawk_API) {
        window.Tawk_API.toggle();
    }
};

  return (
    <div id='faq' data-aos='fade-down' data-aos-duration="1500" className='mx-auto max-w-screen-xl py-10 '>
          <h1 className='text-center text-4xl md:text-7xl text-muted font-extrabold '>FAQ</h1>
            <div className=' flex justify-center '>
            <h2 className='text-xl md:text-3xl w-[600px] -translate-y-6 md:-translate-y-10  font-extrabold text-center'>Frequently Asked Questions</h2>
            </div>
      <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div >
          <div className='flex items-center justify-center pt-10'>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                {renderAccordionTrigger('item-1', 'How can Edu Researchers help me with my assignments?')}
                {renderAccordionContent('item-1', 'Edu Researchers provides professional academic assistance, ensuring that your assignments meet university standards. We help with structuring, formatting, research, and writing to ensure high-quality submissions.')}
              </AccordionItem>
              <AccordionItem value="item-2">
                {renderAccordionTrigger('item-2', 'What subjects do you cover?')}
                {renderAccordionContent('item-2', 'We cover a wide range of subjects, including business, management, nursing, law, engineering, social sciences, and more. If you have a specific subject in mind, feel free to contact us!')}
              </AccordionItem>
              <AccordionItem value="item-3">
                {renderAccordionTrigger('item-3', 'How do I place an order?')}
                {renderAccordionContent('item-3', `Placing an order is simple! Just visit our website, fill in the order form with your requirements, and make the payment. Our experts will start working on your task immediately.`)}
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div >
          <div className='flex items-center justify-center lg:pt-10 pt-0'>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-4">
                {renderAccordionTrigger('item-4', 'Can I request urgent assistance for last-minute deadlines?')}
                {renderAccordionContent('item-4', `Yes! We offer urgent academic assistance, ensuring that you receive quality work within tight deadlines. Let us know your requirements, and we’ll handle the rest.`)}
              </AccordionItem>
              <AccordionItem value="item-5">
                {renderAccordionTrigger('item-5', 'Will my assignment be plagiarism-free?')}
                {renderAccordionContent('item-5', 'Absolutely! We guarantee 100% original work and provide plagiarism-free content. Each assignment is checked through advanced plagiarism detection tools before delivery.')}
              </AccordionItem>
              <AccordionItem value="item-6">
                {renderAccordionTrigger('item-6', 'How do I know my personal information is secure?')}
                {renderAccordionContent('item-6', 'We prioritize privacy and confidentiality. Your personal details remain secure with us, and we never share client information with third parties.')}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
   


<motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-20 px-4"
    >
      <Card className="relative overflow-hidden py-7">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative">
          <CardHeader className="space-y-4 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Need Help with Your Studies?
            </CardTitle>
            <CardDescription className="text-lg text-orange-50">
            Our Expert Team Is Ready To Assist You 24/7. Get Instant Support For Your Academic Needs!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <Link
                href="https://wa.me/447451271188?text=Hello Edu Researchers Team, I need Education Assistance. Could you help me complete my task on time?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="group relative w-full overflow-hidden rounded-full px-8 text-zinc-900 bg-zinc-100 transition-transform hover:scale-105 hover:border-white hover:border sm:w-auto hover:bg-zinc-900 hover:text-zinc-100"
                >
                  <div className="relative z-10 flex items-center  gap-2">
                   <Image className='mr-2' src={'/imgs/whatsapp.png'} width={25} height={25} alt='whatsapp'></Image>
                    <span>Chat on WhatsApp</span>
                  </div>
                  <div className="absolute inset-0 z-0  opacity-0 transition-opacity group-hover:opacity-100" />
                </Button>
              </Link>
              <Button onClick={handleGetStartedClick}
                variant="outline"
                size="lg"
                className="group relative w-[70%] overflow-hidden rounded-full px-8 text-white bg-zinc-900
                dark:bg-zinc-100 dark:text-zinc-900 transition-transform hover:scale-105 sm:w-auto"
              >
                <div className="relative z-10 flex items-center gap-2">
                  <IoChatbubbleEllipses className="h-5 w-5" />
                  <span>Talk With Expert</span>
                </div>
                <div className="absolute inset-0 z-0 bg-white opacity-0 transition-opacity group-hover:opacity-10" />
              </Button>
            </div>
            <div className="mt-8 text-center md:text-start flex items-center justify-center gap-2 text-sm text-orange-100">
              <MessagesSquare className="lg:h-4 lg:w-4 h-10 w-10" />
              <span>Our Support Team's Average Response Time is Less Than 1 Minute Guranteed</span>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
    </div>
  );
};

export default FaqSection;
