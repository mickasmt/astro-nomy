import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
	{
		id: "item-1",
		question: "What does your company do?",
		answer: "Our company provides innovative software solutions to help businesses automate their processes and improve operational efficiency.",
	},
	{
		id: "item-2",
		question: "How can I contact your customer service?",
		answer: "You can contact us by sending an email to support@example.com or by calling our customer service number at +1 123-456-7890.",
	},
	{
		id: "item-3",
		question: "What are your company's business hours?",
		answer: "We are open from Monday to Friday, from 9:00 AM to 5:00 PM. Our customer service is available during these hours to assist you.",
	},
	{
		id: "item-4",
		question: "Do you accept product returns?",
		answer: "Yes, we accept product returns within 30 days of purchase, provided the product is in its original condition. Please refer to our return policy for more information.",
	},
	{
		id: "item-5",
		question: "Can I try your software for free?",
		answer: "Yes, we offer a free 14-day trial of our software. You can sign up on our website to start your trial.",
	},
];

export default function FaqSection() {
	return (
		<Accordion type="single" collapsible className="w-full">
			{faqData.map((faqItem) => (
				<AccordionItem key={faqItem.id} value={faqItem.id}>
					<AccordionTrigger>{faqItem.question}</AccordionTrigger>
					<AccordionContent>{faqItem.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
