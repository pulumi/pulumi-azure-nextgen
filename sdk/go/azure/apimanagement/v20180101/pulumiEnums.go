// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180101

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Type of API.
type ApiType pulumi.String

const (
	ApiTypeHttp = ApiType("http")
	ApiTypeSoap = ApiType("soap")
)

func (ApiType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ApiType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ApiType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ApiType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ApiType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The identity type. Currently the only supported type is 'SystemAssigned'.
type ApimIdentityType pulumi.String

const (
	ApimIdentityTypeSystemAssigned = ApimIdentityType("SystemAssigned")
)

func (ApimIdentityType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ApimIdentityType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ApimIdentityType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ApimIdentityType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ApimIdentityType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

type AuthorizationMethod pulumi.String

const (
	AuthorizationMethodHEAD    = AuthorizationMethod("HEAD")
	AuthorizationMethodOPTIONS = AuthorizationMethod("OPTIONS")
	AuthorizationMethodTRACE   = AuthorizationMethod("TRACE")
	AuthorizationMethodGET     = AuthorizationMethod("GET")
	AuthorizationMethodPOST    = AuthorizationMethod("POST")
	AuthorizationMethodPUT     = AuthorizationMethod("PUT")
	AuthorizationMethodPATCH   = AuthorizationMethod("PATCH")
	AuthorizationMethodDELETE  = AuthorizationMethod("DELETE")
)

func (AuthorizationMethod) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AuthorizationMethod) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AuthorizationMethod) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AuthorizationMethod) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AuthorizationMethod) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Backend communication protocol.
type BackendProtocol pulumi.String

const (
	// The Backend is a RESTful service.
	BackendProtocolHttp = BackendProtocol("http")
	// The Backend is a SOAP service.
	BackendProtocolSoap = BackendProtocol("soap")
)

func (BackendProtocol) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e BackendProtocol) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e BackendProtocol) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e BackendProtocol) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e BackendProtocol) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

type BearerTokenSendingMethod pulumi.String

const (
	BearerTokenSendingMethodAuthorizationHeader = BearerTokenSendingMethod("authorizationHeader")
	BearerTokenSendingMethodQuery               = BearerTokenSendingMethod("query")
)

func (BearerTokenSendingMethod) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e BearerTokenSendingMethod) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e BearerTokenSendingMethod) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e BearerTokenSendingMethod) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e BearerTokenSendingMethod) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Form of an authorization grant, which the client uses to request the access token.
type BearerTokenSendingMethods pulumi.String

const (
	// Access token will be transmitted in the Authorization header using Bearer schema
	BearerTokenSendingMethodsAuthorizationHeader = BearerTokenSendingMethods("authorizationHeader")
	// Access token will be transmitted as query parameters.
	BearerTokenSendingMethodsQuery = BearerTokenSendingMethods("query")
)

func (BearerTokenSendingMethods) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e BearerTokenSendingMethods) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e BearerTokenSendingMethods) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e BearerTokenSendingMethods) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e BearerTokenSendingMethods) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

type ClientAuthenticationMethod pulumi.String

const (
	// Basic Client Authentication method.
	ClientAuthenticationMethodBasic = ClientAuthenticationMethod("Basic")
	// Body based Authentication method.
	ClientAuthenticationMethodBody = ClientAuthenticationMethod("Body")
)

func (ClientAuthenticationMethod) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ClientAuthenticationMethod) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ClientAuthenticationMethod) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ClientAuthenticationMethod) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ClientAuthenticationMethod) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Determines the type of confirmation e-mail that will be sent to the newly created user.
type Confirmation pulumi.String

const (
	// Send an e-mail to the user confirming they have successfully signed up.
	ConfirmationSignup = Confirmation("signup")
	// Send an e-mail inviting the user to sign-up and complete registration.
	ConfirmationInvite = Confirmation("invite")
)

func (Confirmation) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e Confirmation) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e Confirmation) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e Confirmation) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e Confirmation) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Format of the Content in which the API is getting imported.
type ContentFormat pulumi.String

const (
	// The contents are inline and Content type is a WADL document.
	ContentFormat_Wadl_xml = ContentFormat("wadl-xml")
	// The WADL document is hosted on a publicly accessible internet address.
	ContentFormat_Wadl_link_json = ContentFormat("wadl-link-json")
	// The contents are inline and Content Type is a OpenApi 2.0 Document.
	ContentFormat_Swagger_json = ContentFormat("swagger-json")
	// The Open Api 2.0 document is hosted on a publicly accessible internet address.
	ContentFormat_Swagger_link_json = ContentFormat("swagger-link-json")
	// The contents are inline and the document is a WSDL/Soap document.
	ContentFormatWsdl = ContentFormat("wsdl")
	// The WSDL document is hosted on a publicly accessible internet address.
	ContentFormat_Wsdl_link = ContentFormat("wsdl-link")
)

func (ContentFormat) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ContentFormat) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ContentFormat) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ContentFormat) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ContentFormat) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

type GrantType pulumi.String

const (
	// Authorization Code Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.1.
	GrantTypeAuthorizationCode = GrantType("authorizationCode")
	// Implicit Code Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.2.
	GrantTypeImplicit = GrantType("implicit")
	// Resource Owner Password Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.3.
	GrantTypeResourceOwnerPassword = GrantType("resourceOwnerPassword")
	// Client Credentials Grant flow as described https://tools.ietf.org/html/rfc6749#section-4.4.
	GrantTypeClientCredentials = GrantType("clientCredentials")
)

func (GrantType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e GrantType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e GrantType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e GrantType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e GrantType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Group type.
type GroupType pulumi.String

const (
	GroupTypeCustom   = GroupType("custom")
	GroupTypeSystem   = GroupType("system")
	GroupTypeExternal = GroupType("external")
)

func (GroupType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e GroupType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e GroupType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e GroupType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e GroupType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Hostname type.
type HostnameType pulumi.String

const (
	HostnameTypeProxy      = HostnameType("Proxy")
	HostnameTypePortal     = HostnameType("Portal")
	HostnameTypeManagement = HostnameType("Management")
	HostnameTypeScm        = HostnameType("Scm")
)

func (HostnameType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e HostnameType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e HostnameType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e HostnameType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e HostnameType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Identity Provider Type identifier.
type IdentityProviderType pulumi.String

const (
	// Facebook as Identity provider.
	IdentityProviderTypeFacebook = IdentityProviderType("facebook")
	// Google as Identity provider.
	IdentityProviderTypeGoogle = IdentityProviderType("google")
	// Microsoft Live as Identity provider.
	IdentityProviderTypeMicrosoft = IdentityProviderType("microsoft")
	// Twitter as Identity provider.
	IdentityProviderTypeTwitter = IdentityProviderType("twitter")
	// Azure Active Directory as Identity provider.
	IdentityProviderTypeAad = IdentityProviderType("aad")
	// Azure Active Directory B2C as Identity provider.
	IdentityProviderTypeAadB2C = IdentityProviderType("aadB2C")
)

func (IdentityProviderType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e IdentityProviderType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e IdentityProviderType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e IdentityProviderType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e IdentityProviderType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Logger type.
type LoggerType pulumi.String

const (
	// Azure Event Hub as log destination.
	LoggerTypeAzureEventHub = LoggerType("azureEventHub")
	// Azure Application Insights as log destination.
	LoggerTypeApplicationInsights = LoggerType("applicationInsights")
)

func (LoggerType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e LoggerType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e LoggerType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e LoggerType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e LoggerType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Format of the policyContent.
type PolicyContentFormat pulumi.String

const (
	// The contents are inline and Content type is an XML document.
	PolicyContentFormatXml = PolicyContentFormat("xml")
	// The policy XML document is hosted on a http endpoint accessible from the API Management service.
	PolicyContentFormat_Xml_link = PolicyContentFormat("xml-link")
	// The contents are inline and Content type is a non XML encoded policy document.
	PolicyContentFormatRawxml = PolicyContentFormat("rawxml")
	// The policy document is not Xml encoded and is hosted on a http endpoint accessible from the API Management service.
	PolicyContentFormat_Rawxml_link = PolicyContentFormat("rawxml-link")
)

func (PolicyContentFormat) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e PolicyContentFormat) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e PolicyContentFormat) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e PolicyContentFormat) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e PolicyContentFormat) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
type ProductState pulumi.String

const (
	ProductStateNotPublished = ProductState("notPublished")
	ProductStatePublished    = ProductState("published")
)

func (ProductState) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ProductState) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProductState) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProductState) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ProductState) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

type Protocol pulumi.String

const (
	ProtocolHttp  = Protocol("http")
	ProtocolHttps = Protocol("https")
)

func (Protocol) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e Protocol) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e Protocol) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e Protocol) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e Protocol) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Name of the Sku.
type SkuType pulumi.String

const (
	// Developer SKU of Api Management.
	SkuTypeDeveloper = SkuType("Developer")
	// Standard SKU of Api Management.
	SkuTypeStandard = SkuType("Standard")
	// Premium SKU of Api Management.
	SkuTypePremium = SkuType("Premium")
	// Basic SKU of Api Management.
	SkuTypeBasic = SkuType("Basic")
)

func (SkuType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SkuType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SkuType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Type of Api to create.
//  * `http` creates a SOAP to REST API
//  * `soap` creates a SOAP pass-through API .
type SoapApiType pulumi.String

const (
	// Imports a SOAP API having a RESTful front end.
	SoapApiTypeSoapToRest = SoapApiType("http")
	// Imports the Soap API having a SOAP front end.
	SoapApiTypeSoapPassThrough = SoapApiType("soap")
)

func (SoapApiType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SoapApiType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SoapApiType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SoapApiType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SoapApiType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Status of the issue.
type State pulumi.String

const (
	// The issue is proposed.
	StateProposed = State("proposed")
	// The issue is opened.
	StateOpen = State("open")
	// The issue was removed.
	StateRemoved = State("removed")
	// The issue is now resolved.
	StateResolved = State("resolved")
	// The issue was closed.
	StateClosed = State("closed")
)

func (State) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e State) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e State) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e State) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e State) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
type SubscriptionState pulumi.String

const (
	SubscriptionStateSuspended = SubscriptionState("suspended")
	SubscriptionStateActive    = SubscriptionState("active")
	SubscriptionStateExpired   = SubscriptionState("expired")
	SubscriptionStateSubmitted = SubscriptionState("submitted")
	SubscriptionStateRejected  = SubscriptionState("rejected")
	SubscriptionStateCancelled = SubscriptionState("cancelled")
)

func (SubscriptionState) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SubscriptionState) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SubscriptionState) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SubscriptionState) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SubscriptionState) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
type UserState pulumi.String

const (
	// User state is active.
	UserStateActive = UserState("active")
	// User is blocked. Blocked users cannot authenticate at developer portal or call API.
	UserStateBlocked = UserState("blocked")
	// User account is pending. Requires identity confirmation before it can be made active.
	UserStatePending = UserState("pending")
	// User account is closed. All identities and related entities are removed.
	UserStateDeleted = UserState("deleted")
)

func (UserState) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e UserState) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e UserState) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e UserState) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e UserState) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// An value that determines where the API Version identifer will be located in a HTTP request.
type VersioningScheme pulumi.String

const (
	// The API Version is passed in a path segment.
	VersioningSchemeSegment = VersioningScheme("Segment")
	// The API Version is passed in a query parameter.
	VersioningSchemeQuery = VersioningScheme("Query")
	// The API Version is passed in a HTTP header.
	VersioningSchemeHeader = VersioningScheme("Header")
)

func (VersioningScheme) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e VersioningScheme) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e VersioningScheme) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e VersioningScheme) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e VersioningScheme) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
type VirtualNetworkType pulumi.String

const (
	// The service is not part of any Virtual Network.
	VirtualNetworkTypeNone = VirtualNetworkType("None")
	// The service is part of Virtual Network and it is accessible from Internet.
	VirtualNetworkTypeExternal = VirtualNetworkType("External")
	// The service is part of Virtual Network and it is only accessible from within the virtual network.
	VirtualNetworkTypeInternal = VirtualNetworkType("Internal")
)

func (VirtualNetworkType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e VirtualNetworkType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e VirtualNetworkType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e VirtualNetworkType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e VirtualNetworkType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}
