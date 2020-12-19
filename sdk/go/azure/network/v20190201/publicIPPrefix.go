// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190201

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Public IP prefix resource.
type PublicIPPrefix struct {
	pulumi.CustomResourceState

	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// The allocated Prefix.
	IpPrefix pulumi.StringPtrOutput `pulumi:"ipPrefix"`
	// The list of tags associated with the public IP prefix.
	IpTags IpTagResponseArrayOutput `pulumi:"ipTags"`
	// The reference to load balancer frontend IP configuration associated with the public IP prefix.
	LoadBalancerFrontendIpConfiguration SubResourceResponseOutput `pulumi:"loadBalancerFrontendIpConfiguration"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The Length of the Public IP Prefix.
	PrefixLength pulumi.IntPtrOutput `pulumi:"prefixLength"`
	// The provisioning state of the Public IP prefix resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// The public IP address version.
	PublicIPAddressVersion pulumi.StringPtrOutput `pulumi:"publicIPAddressVersion"`
	// The list of all referenced PublicIPAddresses.
	PublicIPAddresses ReferencedPublicIpAddressResponseArrayOutput `pulumi:"publicIPAddresses"`
	// The resource GUID property of the public IP prefix resource.
	ResourceGuid pulumi.StringPtrOutput `pulumi:"resourceGuid"`
	// The public IP prefix SKU.
	Sku PublicIPPrefixSkuResponsePtrOutput `pulumi:"sku"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// A list of availability zones denoting the IP allocated for the resource needs to come from.
	Zones pulumi.StringArrayOutput `pulumi:"zones"`
}

// NewPublicIPPrefix registers a new resource with the given unique name, arguments, and options.
func NewPublicIPPrefix(ctx *pulumi.Context,
	name string, args *PublicIPPrefixArgs, opts ...pulumi.ResourceOption) (*PublicIPPrefix, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.PublicIpPrefixName == nil {
		return nil, errors.New("invalid value for required argument 'PublicIpPrefixName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:PublicIPPrefix"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:PublicIPPrefix"),
		},
	})
	opts = append(opts, aliases)
	var resource PublicIPPrefix
	err := ctx.RegisterResource("azure-nextgen:network/v20190201:PublicIPPrefix", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPublicIPPrefix gets an existing PublicIPPrefix resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPublicIPPrefix(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PublicIPPrefixState, opts ...pulumi.ResourceOption) (*PublicIPPrefix, error) {
	var resource PublicIPPrefix
	err := ctx.ReadResource("azure-nextgen:network/v20190201:PublicIPPrefix", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PublicIPPrefix resources.
type publicIPPrefixState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// The allocated Prefix.
	IpPrefix *string `pulumi:"ipPrefix"`
	// The list of tags associated with the public IP prefix.
	IpTags []IpTagResponse `pulumi:"ipTags"`
	// The reference to load balancer frontend IP configuration associated with the public IP prefix.
	LoadBalancerFrontendIpConfiguration *SubResourceResponse `pulumi:"loadBalancerFrontendIpConfiguration"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The Length of the Public IP Prefix.
	PrefixLength *int `pulumi:"prefixLength"`
	// The provisioning state of the Public IP prefix resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The public IP address version.
	PublicIPAddressVersion *string `pulumi:"publicIPAddressVersion"`
	// The list of all referenced PublicIPAddresses.
	PublicIPAddresses []ReferencedPublicIpAddressResponse `pulumi:"publicIPAddresses"`
	// The resource GUID property of the public IP prefix resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// The public IP prefix SKU.
	Sku *PublicIPPrefixSkuResponse `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// A list of availability zones denoting the IP allocated for the resource needs to come from.
	Zones []string `pulumi:"zones"`
}

type PublicIPPrefixState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// The allocated Prefix.
	IpPrefix pulumi.StringPtrInput
	// The list of tags associated with the public IP prefix.
	IpTags IpTagResponseArrayInput
	// The reference to load balancer frontend IP configuration associated with the public IP prefix.
	LoadBalancerFrontendIpConfiguration SubResourceResponsePtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The Length of the Public IP Prefix.
	PrefixLength pulumi.IntPtrInput
	// The provisioning state of the Public IP prefix resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrInput
	// The public IP address version.
	PublicIPAddressVersion pulumi.StringPtrInput
	// The list of all referenced PublicIPAddresses.
	PublicIPAddresses ReferencedPublicIpAddressResponseArrayInput
	// The resource GUID property of the public IP prefix resource.
	ResourceGuid pulumi.StringPtrInput
	// The public IP prefix SKU.
	Sku PublicIPPrefixSkuResponsePtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// A list of availability zones denoting the IP allocated for the resource needs to come from.
	Zones pulumi.StringArrayInput
}

func (PublicIPPrefixState) ElementType() reflect.Type {
	return reflect.TypeOf((*publicIPPrefixState)(nil)).Elem()
}

type publicIPPrefixArgs struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The allocated Prefix.
	IpPrefix *string `pulumi:"ipPrefix"`
	// The list of tags associated with the public IP prefix.
	IpTags []IpTag `pulumi:"ipTags"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The Length of the Public IP Prefix.
	PrefixLength *int `pulumi:"prefixLength"`
	// The provisioning state of the Public IP prefix resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The public IP address version.
	PublicIPAddressVersion *string `pulumi:"publicIPAddressVersion"`
	// The list of all referenced PublicIPAddresses.
	PublicIPAddresses []ReferencedPublicIpAddress `pulumi:"publicIPAddresses"`
	// The name of the public IP prefix.
	PublicIpPrefixName string `pulumi:"publicIpPrefixName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The resource GUID property of the public IP prefix resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// The public IP prefix SKU.
	Sku *PublicIPPrefixSku `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// A list of availability zones denoting the IP allocated for the resource needs to come from.
	Zones []string `pulumi:"zones"`
}

// The set of arguments for constructing a PublicIPPrefix resource.
type PublicIPPrefixArgs struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// The allocated Prefix.
	IpPrefix pulumi.StringPtrInput
	// The list of tags associated with the public IP prefix.
	IpTags IpTagArrayInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The Length of the Public IP Prefix.
	PrefixLength pulumi.IntPtrInput
	// The provisioning state of the Public IP prefix resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrInput
	// The public IP address version.
	PublicIPAddressVersion pulumi.StringPtrInput
	// The list of all referenced PublicIPAddresses.
	PublicIPAddresses ReferencedPublicIpAddressArrayInput
	// The name of the public IP prefix.
	PublicIpPrefixName pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The resource GUID property of the public IP prefix resource.
	ResourceGuid pulumi.StringPtrInput
	// The public IP prefix SKU.
	Sku PublicIPPrefixSkuPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// A list of availability zones denoting the IP allocated for the resource needs to come from.
	Zones pulumi.StringArrayInput
}

func (PublicIPPrefixArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*publicIPPrefixArgs)(nil)).Elem()
}

type PublicIPPrefixInput interface {
	pulumi.Input

	ToPublicIPPrefixOutput() PublicIPPrefixOutput
	ToPublicIPPrefixOutputWithContext(ctx context.Context) PublicIPPrefixOutput
}

func (*PublicIPPrefix) ElementType() reflect.Type {
	return reflect.TypeOf((*PublicIPPrefix)(nil))
}

func (i *PublicIPPrefix) ToPublicIPPrefixOutput() PublicIPPrefixOutput {
	return i.ToPublicIPPrefixOutputWithContext(context.Background())
}

func (i *PublicIPPrefix) ToPublicIPPrefixOutputWithContext(ctx context.Context) PublicIPPrefixOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PublicIPPrefixOutput)
}

type PublicIPPrefixOutput struct {
	*pulumi.OutputState
}

func (PublicIPPrefixOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PublicIPPrefix)(nil))
}

func (o PublicIPPrefixOutput) ToPublicIPPrefixOutput() PublicIPPrefixOutput {
	return o
}

func (o PublicIPPrefixOutput) ToPublicIPPrefixOutputWithContext(ctx context.Context) PublicIPPrefixOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PublicIPPrefixOutput{})
}
