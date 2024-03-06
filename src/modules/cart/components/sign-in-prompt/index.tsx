import Button from "@/components/common/Button"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between mb-4">
      <div>
        <h2 className="text-subtitle1 mb-0">Already have an account?</h2>
        <p className="text-caption2">Sign in for a better experience.</p>
      </div>
      <div>
        <Link href="/login" scroll={false}>
          <Button variant="fill" color="green" className="h-10">
            Sign in
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
