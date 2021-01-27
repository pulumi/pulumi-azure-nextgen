// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Friendly Routes name mapping to the any Routes or secret related information.
type Route struct {
	pulumi.CustomResourceState

	// compression settings.
	CompressionSettings CompressionSettingsResponseArrayOutput `pulumi:"compressionSettings"`
	// Domains referenced by this endpoint.
	CustomDomains    ResourceReferenceResponseArrayOutput `pulumi:"customDomains"`
	DeploymentStatus pulumi.StringOutput                  `pulumi:"deploymentStatus"`
	// Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
	EnabledState pulumi.StringPtrOutput `pulumi:"enabledState"`
	// Protocol this rule will use when forwarding traffic to backends.
	ForwardingProtocol pulumi.StringPtrOutput `pulumi:"forwardingProtocol"`
	// Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
	HttpsRedirect pulumi.StringPtrOutput `pulumi:"httpsRedirect"`
	// whether this route will be linked to the default endpoint domain.
	LinkToDefaultDomain pulumi.StringPtrOutput `pulumi:"linkToDefaultDomain"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// A reference to the origin group.
	OriginGroup ResourceReferenceResponseOutput `pulumi:"originGroup"`
	// A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
	OriginPath pulumi.StringPtrOutput `pulumi:"originPath"`
	// The route patterns of the rule.
	PatternsToMatch pulumi.StringArrayOutput `pulumi:"patternsToMatch"`
	// Provisioning status
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
	QueryStringCachingBehavior pulumi.StringPtrOutput `pulumi:"queryStringCachingBehavior"`
	// rule sets referenced by this endpoint.
	RuleSets ResourceReferenceResponseArrayOutput `pulumi:"ruleSets"`
	// List of supported protocols for this route.
	SupportedProtocols pulumi.StringArrayOutput `pulumi:"supportedProtocols"`
	// Read only system data
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewRoute registers a new resource with the given unique name, arguments, and options.
func NewRoute(ctx *pulumi.Context,
	name string, args *RouteArgs, opts ...pulumi.ResourceOption) (*Route, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.EndpointName == nil {
		return nil, errors.New("invalid value for required argument 'EndpointName'")
	}
	if args.OriginGroup == nil {
		return nil, errors.New("invalid value for required argument 'OriginGroup'")
	}
	if args.ProfileName == nil {
		return nil, errors.New("invalid value for required argument 'ProfileName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.RouteName == nil {
		return nil, errors.New("invalid value for required argument 'RouteName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:cdn/latest:Route"),
		},
	})
	opts = append(opts, aliases)
	var resource Route
	err := ctx.RegisterResource("azure-nextgen:cdn/v20200901:Route", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetRoute gets an existing Route resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRoute(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *RouteState, opts ...pulumi.ResourceOption) (*Route, error) {
	var resource Route
	err := ctx.ReadResource("azure-nextgen:cdn/v20200901:Route", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Route resources.
type routeState struct {
	// compression settings.
	CompressionSettings []CompressionSettingsResponse `pulumi:"compressionSettings"`
	// Domains referenced by this endpoint.
	CustomDomains    []ResourceReferenceResponse `pulumi:"customDomains"`
	DeploymentStatus *string                     `pulumi:"deploymentStatus"`
	// Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
	EnabledState *string `pulumi:"enabledState"`
	// Protocol this rule will use when forwarding traffic to backends.
	ForwardingProtocol *string `pulumi:"forwardingProtocol"`
	// Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
	HttpsRedirect *string `pulumi:"httpsRedirect"`
	// whether this route will be linked to the default endpoint domain.
	LinkToDefaultDomain *string `pulumi:"linkToDefaultDomain"`
	// Resource name.
	Name *string `pulumi:"name"`
	// A reference to the origin group.
	OriginGroup *ResourceReferenceResponse `pulumi:"originGroup"`
	// A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
	OriginPath *string `pulumi:"originPath"`
	// The route patterns of the rule.
	PatternsToMatch []string `pulumi:"patternsToMatch"`
	// Provisioning status
	ProvisioningState *string `pulumi:"provisioningState"`
	// Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
	QueryStringCachingBehavior *string `pulumi:"queryStringCachingBehavior"`
	// rule sets referenced by this endpoint.
	RuleSets []ResourceReferenceResponse `pulumi:"ruleSets"`
	// List of supported protocols for this route.
	SupportedProtocols []string `pulumi:"supportedProtocols"`
	// Read only system data
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type RouteState struct {
	// compression settings.
	CompressionSettings CompressionSettingsResponseArrayInput
	// Domains referenced by this endpoint.
	CustomDomains    ResourceReferenceResponseArrayInput
	DeploymentStatus pulumi.StringPtrInput
	// Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
	EnabledState pulumi.StringPtrInput
	// Protocol this rule will use when forwarding traffic to backends.
	ForwardingProtocol pulumi.StringPtrInput
	// Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
	HttpsRedirect pulumi.StringPtrInput
	// whether this route will be linked to the default endpoint domain.
	LinkToDefaultDomain pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// A reference to the origin group.
	OriginGroup ResourceReferenceResponsePtrInput
	// A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
	OriginPath pulumi.StringPtrInput
	// The route patterns of the rule.
	PatternsToMatch pulumi.StringArrayInput
	// Provisioning status
	ProvisioningState pulumi.StringPtrInput
	// Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
	QueryStringCachingBehavior pulumi.StringPtrInput
	// rule sets referenced by this endpoint.
	RuleSets ResourceReferenceResponseArrayInput
	// List of supported protocols for this route.
	SupportedProtocols pulumi.StringArrayInput
	// Read only system data
	SystemData SystemDataResponsePtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (RouteState) ElementType() reflect.Type {
	return reflect.TypeOf((*routeState)(nil)).Elem()
}

type routeArgs struct {
	// compression settings.
	CompressionSettings []CompressionSettings `pulumi:"compressionSettings"`
	// Domains referenced by this endpoint.
	CustomDomains []ResourceReference `pulumi:"customDomains"`
	// Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
	EnabledState *string `pulumi:"enabledState"`
	// Name of the endpoint under the profile which is unique globally.
	EndpointName string `pulumi:"endpointName"`
	// Protocol this rule will use when forwarding traffic to backends.
	ForwardingProtocol *string `pulumi:"forwardingProtocol"`
	// Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
	HttpsRedirect *string `pulumi:"httpsRedirect"`
	// whether this route will be linked to the default endpoint domain.
	LinkToDefaultDomain *string `pulumi:"linkToDefaultDomain"`
	// A reference to the origin group.
	OriginGroup ResourceReference `pulumi:"originGroup"`
	// A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
	OriginPath *string `pulumi:"originPath"`
	// The route patterns of the rule.
	PatternsToMatch []string `pulumi:"patternsToMatch"`
	// Name of the CDN profile which is unique within the resource group.
	ProfileName string `pulumi:"profileName"`
	// Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
	QueryStringCachingBehavior *string `pulumi:"queryStringCachingBehavior"`
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the routing rule.
	RouteName string `pulumi:"routeName"`
	// rule sets referenced by this endpoint.
	RuleSets []ResourceReference `pulumi:"ruleSets"`
	// List of supported protocols for this route.
	SupportedProtocols []string `pulumi:"supportedProtocols"`
}

// The set of arguments for constructing a Route resource.
type RouteArgs struct {
	// compression settings.
	CompressionSettings CompressionSettingsArrayInput
	// Domains referenced by this endpoint.
	CustomDomains ResourceReferenceArrayInput
	// Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
	EnabledState pulumi.StringPtrInput
	// Name of the endpoint under the profile which is unique globally.
	EndpointName pulumi.StringInput
	// Protocol this rule will use when forwarding traffic to backends.
	ForwardingProtocol pulumi.StringPtrInput
	// Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
	HttpsRedirect pulumi.StringPtrInput
	// whether this route will be linked to the default endpoint domain.
	LinkToDefaultDomain pulumi.StringPtrInput
	// A reference to the origin group.
	OriginGroup ResourceReferenceInput
	// A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
	OriginPath pulumi.StringPtrInput
	// The route patterns of the rule.
	PatternsToMatch pulumi.StringArrayInput
	// Name of the CDN profile which is unique within the resource group.
	ProfileName pulumi.StringInput
	// Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
	QueryStringCachingBehavior AfdQueryStringCachingBehavior
	// Name of the Resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// Name of the routing rule.
	RouteName pulumi.StringInput
	// rule sets referenced by this endpoint.
	RuleSets ResourceReferenceArrayInput
	// List of supported protocols for this route.
	SupportedProtocols pulumi.StringArrayInput
}

func (RouteArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*routeArgs)(nil)).Elem()
}

type RouteInput interface {
	pulumi.Input

	ToRouteOutput() RouteOutput
	ToRouteOutputWithContext(ctx context.Context) RouteOutput
}

func (*Route) ElementType() reflect.Type {
	return reflect.TypeOf((*Route)(nil))
}

func (i *Route) ToRouteOutput() RouteOutput {
	return i.ToRouteOutputWithContext(context.Background())
}

func (i *Route) ToRouteOutputWithContext(ctx context.Context) RouteOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RouteOutput)
}

type RouteOutput struct {
	*pulumi.OutputState
}

func (RouteOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Route)(nil))
}

func (o RouteOutput) ToRouteOutput() RouteOutput {
	return o
}

func (o RouteOutput) ToRouteOutputWithContext(ctx context.Context) RouteOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(RouteOutput{})
}
