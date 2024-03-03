import {
	EmailIcon,
	PhoneIcon,
	GithubIcon,
	LinkedinIcon,
	BirthdayIcon,
	NpmIcon,
	WorldIcon,
	CertificatesIcon,
} from '@/assets/icons/contact/contact.icons.ts';
import type {
	IInfoContact,
	IKindContact,
} from '@/shared/interfaces/info-contact.interface';

export const infoContact: IInfoContact[] = [
	{
		kind: 'phone',
		icon: PhoneIcon,
		value: '627 63 39 20',
		shortValue: '627633920',
	},
	{
		kind: 'github',
		icon: GithubIcon,
		value: 'github.com/CartagoGit',
		shortValue: 'CartagoGit',
	},
	{
		kind: 'email',
		icon: EmailIcon,
		value: 'cv2mario@gmail.com',
		shortValue: 'cv2mario@gmail.com',
	},
	{
		kind: 'linkedin',
		icon: LinkedinIcon,
		value: 'linkedin.com/in/mario-cabrero-volarich',
		shortValue: 'Mario Cabrero Volarich',
	},
	{
		kind: 'location',
		icon: WorldIcon,
		value: '41007 - Sevilla ',
		shortValue: 'Sevilla',
	},
	{
		kind: 'npm',
		icon: NpmIcon,
		value: 'npmjs.com/~cartago-git',
		shortValue: 'cartago-git',
	},
	{
		kind: 'birthday',
		icon: BirthdayIcon,
		value: '04/07/1988',
		shortValue: '04/07/1988',
	},
	{
		kind: 'certificates',
		icon: CertificatesIcon,
		value: 'github.com/CartagoGit/Certificados',
		shortValue: 'Certificados',
	},
] as const;

export let infoContactObject = {} as Record<IKindContact, IInfoContact>;

infoContact.forEach((contact) => {
	console.log('contact', JSON.stringify(contact));
	infoContactObject[contact.kind] = contact;
});
