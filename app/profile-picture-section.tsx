import { Icons } from '@/components/assets/icons'

interface ProfilePictureSectionProps {
  className?: string;
}
const ProfilePictureSection = ({className}:ProfilePictureSectionProps) =>  {
  return (
    <section
      id="profilePictureSection"
      className={`min-h-screen place-items-center grid lg:grid ${className}`}
    >
      <Icons.profilePicture className="w-3/4 h-3/4"/>
    </section>
  )
}

export default ProfilePictureSection