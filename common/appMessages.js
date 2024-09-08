const AppMessages = {
  FAILURE: {
    INVALID_TOKEN_PROVIDED: "Invalid token provided.",
    INVALID_CREDENTIALS: "Invalid credentials provided.",
    EMAIL_EXISTS: "An account already exists with this email, kindly login",
    EMAIL_NOT_VERIFIED: "Please verify your email address",
    FORBIDDEN_RESOURCE:
      "Forbidden Resource. You do not have the required permissions to access this resource",
    VERIFY_ACCOUNT:
      "For your account's ongoing security, we require you to establish a new password.  Logging in with the default password is no longer possible due to enhanced security measures.",
    INTERNAL_SERVER_ERROR: "Internal Server Error",
    ALL_MEMBERS_RETRIEVED_FAIL: "Failed to retrieve all Members",
    SINGLE_MEMBER_RETRIEVED_FAIL: "Failed to retrieve this Member",
    INVALID_PHONE_NUMBER: "Please enter a valid phone number",
    MEMBER_UPDATE_FAIL: "Failed to update this Member",
    ALL_MEMBERS_UPDATE_FAIL: "Failed to update All Members",
    USER_CREATE_FAIL: "Failed to Create User",
    BULK_USER_CREATE_FAIL: "Failed to Create Bulk Users",
  },
  SUCCESS: {
    LOGIN: "Login successful.",
    ACCOUNT_CREATED: "Account Created successfully.",
    ADMIN_INVITED: "Invitation Sent successfully.",
    LOGOUT: "Logged out successfully.",
    SIGNUP: "Signup successful",
    EMAIL_SENT: "If you have an account with us, You will receive a mail to",
    PASSWORD_RESET: "Password reset successfully",
    TOKEN_REFRESHED: "Token Refreshed Successfully",
    DATA_FETCHED: "Data Retreived Successfully",
    BULK_CREATE_SUCCESS: "Bulk user creation done successfully",
    MEMBER_CREATE_SUCCESS: "This Member was successfully created",
    ALL_MEMBERS_RETRIEVED_SUCCESS: "All Members was successfully retrieved",
    SINGLE_MEMBER_RETRIEVED_SUCCESS: "Member successfully retrieved",
    MEMBER_UPDATE_SUCCESS: "This Member has been updated successfully",
    ALL_MEMBERS_UPDATE_SUCCESS: "All Members have been updated successfully",
    USER_CREATE_SUCCESS: "User Created Successfully",
    BULK_USERS_CREATE_SUCCESS: "Bulk Users Created Successfully",
  },
  INFO: {
    INVALID_OPERATION: "Invalid operation.",
    EMPTY_TOKEN_HEADER: "Invalid authorization header",
    MEMBER_EXIST: "Sorry this Member already exist",
    MEMBER_DOES_NOT_EXIST: "Sorry this Member does not exist",
    EMAIL_EXISTS: "An account already exists with this email",
    USER_EXIST: "An account already exists with this User",
  },
};

module.exports = AppMessages;
