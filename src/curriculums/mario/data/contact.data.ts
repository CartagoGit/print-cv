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
import { tPlace } from '../helpers/traductor.helper';
import { DockerIcon } from '@/assets/icons/techs/techs.icons';

export const CONTACT_DATA: IInfoContact[] = [
	{
		kind: 'phone',
		icon: PhoneIcon,
		value: '684 74 54 18',
		shortValue: '684745418',
		position: 'left',
	},
	{
		kind: 'github',
		icon: GithubIcon,
		value: 'github.com/CartagoGit',
		shortValue: 'CartagoGit',
		position: 'right',
	},
	{
		kind: 'email',
		icon: EmailIcon,
		value: 'cv2mario@gmail.com',
		shortValue: 'cv2mario@gmail.com',
		position: 'left',
	},
	{
		kind: 'linkedin',
		icon: LinkedinIcon,
		value: 'linkedin.com/in/mario-cabrero-volarich',
		shortValue: 'Mario Cabrero Volarich',
		position: 'right',
	},
	{
		kind: 'location',
		icon: WorldIcon,
		value: tPlace('SEVILLE', { pre: '41008 - ' }),
		shortValue: tPlace('SEVILLE').value,
		position: 'left',
	},
	{
		kind: 'npm',
		icon: NpmIcon,
		value: 'npmjs.com/~cartago-git',
		shortValue: 'cartago-git',
		position: 'right',
	},
	{
		kind: 'birthday',
		icon: BirthdayIcon,
		value: '04/07/1988',
		shortValue: '04/07/1988',
		position: 'left',
	},
	{
		kind: 'certificates',
		icon: CertificatesIcon,
		value: 'github.com/CartagoGit/Certificados',
		shortValue: 'Certificados',
		position: 'right',
	},
	{
		kind: 'dockerhub',
		icon: DockerIcon,
		value: 'hub.docker.com/u/cartagodocker',
		shortValue: 'cartagodocker',
		position: 'right',
	},
] as const;

export let CONTACT_DATA_OBJ = {} as Record<IKindContact, IInfoContact>;

CONTACT_DATA.forEach((contact) => {
	CONTACT_DATA_OBJ[contact.kind] = contact;
});
