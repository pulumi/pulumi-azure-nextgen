// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Public IP address resource.
type PublicIPAddress struct {
	pulumi.CustomResourceState

	// The FQDN of the DNS record associated with the public IP address.
	DnsSettings PublicIPAddressDnsSettingsResponsePtrOutput `pulumi:"dnsSettings"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// The idle timeout of the public IP address.
	IdleTimeoutInMinutes pulumi.IntPtrOutput    `pulumi:"idleTimeoutInMinutes"`
	IpAddress            pulumi.StringPtrOutput `pulumi:"ipAddress"`
	// IPConfiguration
	IpConfiguration IPConfigurationResponseOutput `pulumi:"ipConfiguration"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
	PublicIPAddressVersion pulumi.StringPtrOutput `pulumi:"publicIPAddressVersion"`
	// The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
	PublicIPAllocationMethod pulumi.StringPtrOutput `pulumi:"publicIPAllocationMethod"`
	// The resource GUID property of the public IP resource.
	ResourceGuid pulumi.StringPtrOutput `pulumi:"resourceGuid"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
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
			Type: pulumi.String("azure-nextgen:network/v20191201:PublicIPAddress"),
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
	err := ctx.RegisterResource("azure-nextgen:network/v20170301:PublicIPAddress", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:network/v20170301:PublicIPAddress", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PublicIPAddress resources.
type publicIPAddressState struct {
	// The FQDN of the DNS record associated with the public IP address.
	DnsSettings *PublicIPAddressDnsSettingsResponse `pulumi:"dnsSettings"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// The idle timeout of the public IP address.
	IdleTimeoutInMinutes *int    `pulumi:"idleTimeoutInMinutes"`
	IpAddress            *string `pulumi:"ipAddress"`
	// IPConfiguration
	IpConfiguration *IPConfigurationResponse `pulumi:"ipConfiguration"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
	PublicIPAddressVersion *string `pulumi:"publicIPAddressVersion"`
	// The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
	PublicIPAllocationMethod *string `pulumi:"publicIPAllocationMethod"`
	// The resource GUID property of the public IP resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type PublicIPAddressState struct {
	// The FQDN of the DNS record associated with the public IP address.
	DnsSettings PublicIPAddressDnsSettingsResponsePtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// The idle timeout of the public IP address.
	IdleTimeoutInMinutes pulumi.IntPtrInput
	IpAddress            pulumi.StringPtrInput
	// IPConfiguration
	IpConfiguration IPConfigurationResponsePtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrInput
	// The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
	PublicIPAddressVersion pulumi.StringPtrInput
	// The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
	PublicIPAllocationMethod pulumi.StringPtrInput
	// The resource GUID property of the public IP resource.
	ResourceGuid pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (PublicIPAddressState) ElementType() reflect.Type {
	return reflect.TypeOf((*publicIPAddressState)(nil)).Elem()
}

type publicIPAddressArgs struct {
	// The FQDN of the DNS record associated with the public IP address.
	DnsSettings *PublicIPAddressDnsSettings `pulumi:"dnsSettings"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The idle timeout of the public IP address.
	IdleTimeoutInMinutes *int    `pulumi:"idleTimeoutInMinutes"`
	IpAddress            *string `pulumi:"ipAddress"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
	PublicIPAddressVersion *string `pulumi:"publicIPAddressVersion"`
	// The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
	PublicIPAllocationMethod *string `pulumi:"publicIPAllocationMethod"`
	// The name of the public IP address.
	PublicIpAddressName string `pulumi:"publicIpAddressName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The resource GUID property of the public IP resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a PublicIPAddress resource.
type PublicIPAddressArgs struct {
	// The FQDN of the DNS record associated with the public IP address.
	DnsSettings PublicIPAddressDnsSettingsPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// The idle timeout of the public IP address.
	IdleTimeoutInMinutes pulumi.IntPtrInput
	IpAddress            pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrInput
	// The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
	PublicIPAddressVersion pulumi.StringPtrInput
	// The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
	PublicIPAllocationMethod pulumi.StringPtrInput
	// The name of the public IP address.
	PublicIpAddressName pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The resource GUID property of the public IP resource.
	ResourceGuid pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (PublicIPAddressArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*publicIPAddressArgs)(nil)).Elem()
}

type PublicIPAddressInput interface {
	pulumi.Input

	ToPublicIPAddressOutput() PublicIPAddressOutput
	ToPublicIPAddressOutputWithContext(ctx context.Context) PublicIPAddressOutput
}

func (*PublicIPAddress) ElementType() reflect.Type {
	return reflect.TypeOf((*PublicIPAddress)(nil))
}

func (i *PublicIPAddress) ToPublicIPAddressOutput() PublicIPAddressOutput {
	return i.ToPublicIPAddressOutputWithContext(context.Background())
}

func (i *PublicIPAddress) ToPublicIPAddressOutputWithContext(ctx context.Context) PublicIPAddressOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PublicIPAddressOutput)
}

type PublicIPAddressOutput struct {
	*pulumi.OutputState
}

func (PublicIPAddressOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PublicIPAddress)(nil))
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
