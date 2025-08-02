import React from 'react'
import { SocialLoginProps } from './index'

const SocialLogin: React.FC<SocialLoginProps> = ({
  provider,
  appId,
  onSuccess,
  onFailure,
  children,
  className,
  disabled = false
}) => {
  const handleLogin = async () => {
    try {
      // Placeholder implementation
      // In a real implementation, this would integrate with the actual social login SDKs
      console.log(`Logging in with ${provider}`)
      
      // Mock successful response
      const mockResponse = {
        provider,
        profile: {
          id: '123456',
          name: 'John Doe',
          email: 'john.doe@example.com',
          picture: 'https://via.placeholder.com/150'
        },
        token: 'mock-token-123'
      }
      
      onSuccess(mockResponse)
    } catch (error) {
      onFailure(error)
    }
  }

  return (
    <button
      className={className}
      onClick={handleLogin}
      disabled={disabled}
      type="button"
    >
      {children || `Login with ${provider}`}
    </button>
  )
}

export default SocialLogin