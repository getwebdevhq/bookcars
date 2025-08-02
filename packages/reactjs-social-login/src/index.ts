export interface SocialLoginProps {
  provider: 'google' | 'facebook' | 'github' | 'twitter'
  appId: string
  onSuccess: (response: any) => void
  onFailure: (error: any) => void
  children?: React.ReactNode
  className?: string
  disabled?: boolean
}

export interface SocialLoginResponse {
  provider: string
  profile: {
    id: string
    name: string
    email: string
    picture?: string
  }
  token: string
}

export { default as SocialLogin } from './SocialLogin'