// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Public IP address resource.
type PublicIPAddress struct {
	pulumi.CustomResourceState

	// The DDoS protection custom policy associated with the public IP address.
	DdosSettings DdosSettingsResponsePtrOutput `pulumi:"ddosSettings"`
	// The FQDN of the DNS record associated with the public IP address.
	DnsSettings PublicIPAddressDnsSettingsResponsePtrOutput `pulumi:"dnsSettings"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The idle timeout of the public IP address.
	IdleTimeoutInMinutes pulumi.IntPtrOutput `pulumi:"idleTimeoutInMinutes"`
	// The IP address associated with the public IP address resource.
	IpAddress pulumi.StringPtrOutput `pulumi:"ipAddress"`
	// The IP configuration associated with the public IP address.
	IpConfiguration IPConfigurationResponseOutput `pulumi:"ipConfiguration"`
	// The list of tags associated with the public IP address.
	IpTags IpTagResponseArrayOutput `pulumi:"ipTags"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the public IP address resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The public IP address version.
	PublicIPAddressVersion pulumi.StringPtrOutput `pulumi:"publicIPAddressVersion"`
	// The public IP address allocation method.
	PublicIPAllocationMethod pulumi.StringPtrOutput `pulumi:"publicIPAllocationMethod"`
	// The Public IP Prefix this Public IP Address should be allocated from.
	PublicIPPrefix SubResourceResponsePtrOutput `pulumi:"publicIPPrefix"`
	// The resource GUID property of the public IP address resource.
	ResourceGuid pulumi.StringOutput `pulumi:"resourceGuid"`
	// The public IP address SKU.
	Sku PublicIPAddressSkuResponsePtrOutput `pulumi:"sku"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// A list of availability zones denoting the IP allocated for the resource needs to come from.
	Zones pulumi.StringArrayOutput `pulumi:"zones"`
}

// NewPublicIPAddress registers a new resource with the given unique name, arguments, and options.
func NewPublicIPAddress(ctx *pulumi.Context,
	name string, args *PublicIPAddressArgs, opts ...pulumi.ResourceOption) (*PublicIPAddress, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.PublicIpAddressName == nil {
		return nil, errors.New("invalid value for required argument 'PublicIpAddressName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150501preview:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150615:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160330:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160601:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160901:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20161201:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170601:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170801:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171001:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:PublicIPAddress"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:PublicIPAddress"),
		},
	})
	opts = append(opts, aliases)
	var resource PublicIPAddress
	err := ctx.RegisterResource("azure-nextgen:network/v20191201:PublicIPAddress", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPublicIPAddress gets an existing PublicIPAddress resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPublicIPAddress(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PublicIPAddressState, opts ...pulumi.ResourceOption) (*PublicIPAddress, error) {
	var resource PublicIPAddress
	err := ctx.ReadResource("azure-nextgen:network/v20191201:PublicIPAddress", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PublicIPAddress resources.
type publicIPAddressState struct {
	// The DDoS protection custom policy associated with the public IP address.
	DdosSettings *DdosSettingsResponse `pulumi:"ddosSettings"`
	// The FQDN of the DNS record associated with the public IP address.
	DnsSettings *PublicIPAddressDnsSettingsResponse `pulumi:"dnsSettings"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// The idle timeout of the public IP address.
	IdleTimeoutInMinutes *int `pulumi:"idleTimeoutInMinutes"`
	// The IP address associated with the public IP address resource.
	IpAddress *string `pulumi:"ipAddress"`
	// The IP configuration associated with the public IP address.
	IpConfiguration *IPConfigurationResponse `pulumi:"ipConfiguration"`
	// The list of tags associated with the public IP address.
	IpTags []IpTagResponse `pulumi:"ipTags"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The provisioning state of the public IP address resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The public IP address version.
	PublicIPAddressVersion *string `pulumi:"publicIPAddressVersion"`
	// The public IP address allocation method.
	PublicIPAllocationMethod *string `pulumi:"publicIPAllocationMethod"`
	// The Public IP Prefix this Public IP Address should be allocated from.
	PublicIPPrefix *SubResourceResponse `pulumi:"publicIPPrefix"`
	// The resource GUID property of the public IP address resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// The public IP address SKU.
	Sku *PublicIPAddressSkuResponse `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// A list of availability zones denoting the IP allocated for the resource needs to come from.
	Zones []string `pulumi:"zones"`
}

type PublicIPAddressState struct {
	// The DDoS protection custom policy associated with the public IP address.
	DdosSettings DdosSettingsResponsePtrInput
	// The FQDN of the DNS record associated with the public IP address.
	DnsSettings PublicIPAddressDnsSettingsResponsePtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// The idle timeout of the public IP address.
	IdleTimeoutInMinutes pulumi.IntPtrInput
	// The IP address associated with the public IP address resource.
	IpAddress pulumi.StringPtrInput
	// The IP configuration associated with the public IP address.
	IpConfiguration IPConfigurationResponsePtrInput
	// The list of tags associated with the public IP address.
	IpTags IpTagResponseArrayInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The provisioning state of the public IP address resource.
	ProvisioningState pulumi.StringPtrInput
	// The public IP address version.
	PublicIPAddressVersion pulumi.StringPtrInput
	// The public IP address allocation method.
	PublicIPAllocationMethod pulumi.StringPtrInput
	// The Public IP Prefix this Public IP Address should be allocated from.
	PublicIPPrefix SubResourceResponsePtrInput
	// The resource GUID property of the public IP address resource.
	ResourceGuid pulumi.StringPtrInput
	// The public IP address SKU.
	Sku PublicIPAddressSkuResponsePtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// A list of availability zones denoting the IP allocated for the resource needs to come from.
	Zones pulumi.StringArrayInput
}

func (PublicIPAddressState) ElementType() reflect.Type {
	return reflect.TypeOf((*publicIPAddressState)(nil)).Elem()
}

type publicIPAddressArgs struct {
	// The DDoS protection custom policy associated with the public IP address.
	DdosSettings *DdosSettings `pulumi:"ddosSettings"`
	// The FQDN of the DNS record associated with the public IP address.
	DnsSettings *PublicIPAddressDnsSettings `pulumi:"dnsSettings"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The idle timeout of the public IP address.
	IdleTimeoutInMinutes *int `pulumi:"idleTimeoutInMinutes"`
	// The IP address associated with the public IP address resource.
	IpAddress *string `pulumi:"ipAddress"`
	// The list of tags associated with the public IP address.
	IpTags []IpTag `pulumi:"ipTags"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The public IP address version.
	PublicIPAddressVersion *string `pulumi:"publicIPAddressVersion"`
	// The public IP address allocation method.
	PublicIPAllocationMethod *string `pulumi:"publicIPAllocationMethod"`
	// The Public IP Prefix this Public IP Address should be allocated from.
	PublicIPPrefix *SubResource `pulumi:"publicIPPrefix"`
	// The name of the public IP address.
	PublicIpAddressName string `pulumi:"publicIpAddressName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The public IP address SKU.
	Sku *PublicIPAddressSku `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// A list of availability zones denoting the IP allocated for the resource needs to come from.
	Zones []string `pulumi:"zones"`
}

// The set of arguments for constructing a PublicIPAddress resource.
type PublicIPAddressArgs struct {
	// The DDoS protection custom policy associated with the public IP address.
	DdosSettings DdosSettingsPtrInput
	// The FQDN of the DNS record associated with the public IP address.
	DnsSettings PublicIPAddressDnsSettingsPtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// The idle timeout of the public IP address.
	IdleTimeoutInMinutes pulumi.IntPtrInput
	// The IP address associated with the public IP address resource.
	IpAddress pulumi.StringPtrInput
	// The list of tags associated with the public IP address.
	IpTags IpTagArrayInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The public IP address version.
	PublicIPAddressVersion pulumi.StringPtrInput
	// The public IP address allocation method.
	PublicIPAllocationMethod pulumi.StringPtrInput
	// The Public IP Prefix this Public IP Address should be allocated from.
	PublicIPPrefix SubResourcePtrInput
	// The name of the public IP address.
	PublicIpAddressName pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The public IP address SKU.
	Sku PublicIPAddressSkuPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// A list of availability zones denoting the IP allocated for the resource needs to come from.
	Zones pulumi.StringArrayInput
}

func (PublicIPAddressArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*publicIPAddressArgs)(nil)).Elem()
}

type PublicIPAddressInput interface {
	pulumi.Input

	ToPublicIPAddressOutput() PublicIPAddressOutput
	ToPublicIPAddressOutputWithContext(ctx context.Context) PublicIPAddressOutput
}

func (PublicIPAddress) ElementType() reflect.Type {
	return reflect.TypeOf((*PublicIPAddress)(nil)).Elem()
}

func (i PublicIPAddress) ToPublicIPAddressOutput() PublicIPAddressOutput {
	return i.ToPublicIPAddressOutputWithContext(context.Background())
}

func (i PublicIPAddress) ToPublicIPAddressOutputWithContext(ctx context.Context) PublicIPAddressOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PublicIPAddressOutput)
}

type PublicIPAddressOutput struct {
	*pulumi.OutputState
}

func (PublicIPAddressOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PublicIPAddressOutput)(nil)).Elem()
}

func (o PublicIPAddressOutput) ToPublicIPAddressOutput() PublicIPAddressOutput {
	return o
}

func (o PublicIPAddressOutput) ToPublicIPAddressOutputWithContext(ctx context.Context) PublicIPAddressOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PublicIPAddressOutput{})
}
