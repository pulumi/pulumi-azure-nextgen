// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200717preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A private cloud resource
type PrivateCloud struct {
	pulumi.CustomResourceState

	// An ExpressRoute Circuit
	Circuit CircuitResponsePtrOutput `pulumi:"circuit"`
	// The endpoints
	Endpoints EndpointsResponseOutput `pulumi:"endpoints"`
	// vCenter Single Sign On Identity Sources
	IdentitySources IdentitySourceResponseArrayOutput `pulumi:"identitySources"`
	// Connectivity to internet is enabled or disabled
	Internet pulumi.StringPtrOutput `pulumi:"internet"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// The default cluster used for management
	ManagementCluster ManagementClusterResponseOutput `pulumi:"managementCluster"`
	// Network used to access vCenter Server and NSX-T Manager
	ManagementNetwork pulumi.StringOutput `pulumi:"managementNetwork"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
	NetworkBlock pulumi.StringOutput `pulumi:"networkBlock"`
	// Thumbprint of the NSX-T Manager SSL certificate
	NsxtCertificateThumbprint pulumi.StringOutput `pulumi:"nsxtCertificateThumbprint"`
	// Indicate to rotate the NSX-T Manager password for the private cloud
	NsxtPassword pulumi.StringPtrOutput `pulumi:"nsxtPassword"`
	// Used for virtual machine cold migration, cloning, and snapshot migration
	ProvisioningNetwork pulumi.StringOutput `pulumi:"provisioningNetwork"`
	// The provisioning state
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The private cloud SKU
	Sku SkuResponseOutput `pulumi:"sku"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// Thumbprint of the vCenter Server SSL certificate
	VcenterCertificateThumbprint pulumi.StringOutput `pulumi:"vcenterCertificateThumbprint"`
	// Indicate to rotate the vCenter admin password for the private cloud
	VcenterPassword pulumi.StringPtrOutput `pulumi:"vcenterPassword"`
	// Used for live migration of virtual machines
	VmotionNetwork pulumi.StringOutput `pulumi:"vmotionNetwork"`
}

// NewPrivateCloud registers a new resource with the given unique name, arguments, and options.
func NewPrivateCloud(ctx *pulumi.Context,
	name string, args *PrivateCloudArgs, opts ...pulumi.ResourceOption) (*PrivateCloud, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ManagementCluster == nil {
		return nil, errors.New("invalid value for required argument 'ManagementCluster'")
	}
	if args.NetworkBlock == nil {
		return nil, errors.New("invalid value for required argument 'NetworkBlock'")
	}
	if args.PrivateCloudName == nil {
		return nil, errors.New("invalid value for required argument 'PrivateCloudName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Sku == nil {
		return nil, errors.New("invalid value for required argument 'Sku'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:avs/latest:PrivateCloud"),
		},
		{
			Type: pulumi.String("azure-nextgen:avs/v20190809preview:PrivateCloud"),
		},
		{
			Type: pulumi.String("azure-nextgen:avs/v20200320:PrivateCloud"),
		},
	})
	opts = append(opts, aliases)
	var resource PrivateCloud
	err := ctx.RegisterResource("azure-nextgen:avs/v20200717preview:PrivateCloud", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPrivateCloud gets an existing PrivateCloud resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPrivateCloud(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PrivateCloudState, opts ...pulumi.ResourceOption) (*PrivateCloud, error) {
	var resource PrivateCloud
	err := ctx.ReadResource("azure-nextgen:avs/v20200717preview:PrivateCloud", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PrivateCloud resources.
type privateCloudState struct {
	// An ExpressRoute Circuit
	Circuit *CircuitResponse `pulumi:"circuit"`
	// The endpoints
	Endpoints *EndpointsResponse `pulumi:"endpoints"`
	// vCenter Single Sign On Identity Sources
	IdentitySources []IdentitySourceResponse `pulumi:"identitySources"`
	// Connectivity to internet is enabled or disabled
	Internet *string `pulumi:"internet"`
	// Resource location
	Location *string `pulumi:"location"`
	// The default cluster used for management
	ManagementCluster *ManagementClusterResponse `pulumi:"managementCluster"`
	// Network used to access vCenter Server and NSX-T Manager
	ManagementNetwork *string `pulumi:"managementNetwork"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
	NetworkBlock *string `pulumi:"networkBlock"`
	// Thumbprint of the NSX-T Manager SSL certificate
	NsxtCertificateThumbprint *string `pulumi:"nsxtCertificateThumbprint"`
	// Indicate to rotate the NSX-T Manager password for the private cloud
	NsxtPassword *string `pulumi:"nsxtPassword"`
	// Used for virtual machine cold migration, cloning, and snapshot migration
	ProvisioningNetwork *string `pulumi:"provisioningNetwork"`
	// The provisioning state
	ProvisioningState *string `pulumi:"provisioningState"`
	// The private cloud SKU
	Sku *SkuResponse `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// Thumbprint of the vCenter Server SSL certificate
	VcenterCertificateThumbprint *string `pulumi:"vcenterCertificateThumbprint"`
	// Indicate to rotate the vCenter admin password for the private cloud
	VcenterPassword *string `pulumi:"vcenterPassword"`
	// Used for live migration of virtual machines
	VmotionNetwork *string `pulumi:"vmotionNetwork"`
}

type PrivateCloudState struct {
	// An ExpressRoute Circuit
	Circuit CircuitResponsePtrInput
	// The endpoints
	Endpoints EndpointsResponsePtrInput
	// vCenter Single Sign On Identity Sources
	IdentitySources IdentitySourceResponseArrayInput
	// Connectivity to internet is enabled or disabled
	Internet pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// The default cluster used for management
	ManagementCluster ManagementClusterResponsePtrInput
	// Network used to access vCenter Server and NSX-T Manager
	ManagementNetwork pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
	NetworkBlock pulumi.StringPtrInput
	// Thumbprint of the NSX-T Manager SSL certificate
	NsxtCertificateThumbprint pulumi.StringPtrInput
	// Indicate to rotate the NSX-T Manager password for the private cloud
	NsxtPassword pulumi.StringPtrInput
	// Used for virtual machine cold migration, cloning, and snapshot migration
	ProvisioningNetwork pulumi.StringPtrInput
	// The provisioning state
	ProvisioningState pulumi.StringPtrInput
	// The private cloud SKU
	Sku SkuResponsePtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// Thumbprint of the vCenter Server SSL certificate
	VcenterCertificateThumbprint pulumi.StringPtrInput
	// Indicate to rotate the vCenter admin password for the private cloud
	VcenterPassword pulumi.StringPtrInput
	// Used for live migration of virtual machines
	VmotionNetwork pulumi.StringPtrInput
}

func (PrivateCloudState) ElementType() reflect.Type {
	return reflect.TypeOf((*privateCloudState)(nil)).Elem()
}

type privateCloudArgs struct {
	// vCenter Single Sign On Identity Sources
	IdentitySources []IdentitySource `pulumi:"identitySources"`
	// Connectivity to internet is enabled or disabled
	Internet *string `pulumi:"internet"`
	// Resource location
	Location string `pulumi:"location"`
	// The default cluster used for management
	ManagementCluster ManagementCluster `pulumi:"managementCluster"`
	// The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
	NetworkBlock string `pulumi:"networkBlock"`
	// Indicate to rotate the NSX-T Manager password for the private cloud
	NsxtPassword *string `pulumi:"nsxtPassword"`
	// Name of the private cloud
	PrivateCloudName string `pulumi:"privateCloudName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The private cloud SKU
	Sku Sku `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Indicate to rotate the vCenter admin password for the private cloud
	VcenterPassword *string `pulumi:"vcenterPassword"`
}

// The set of arguments for constructing a PrivateCloud resource.
type PrivateCloudArgs struct {
	// vCenter Single Sign On Identity Sources
	IdentitySources IdentitySourceArrayInput
	// Connectivity to internet is enabled or disabled
	Internet pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringInput
	// The default cluster used for management
	ManagementCluster ManagementClusterInput
	// The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
	NetworkBlock pulumi.StringInput
	// Indicate to rotate the NSX-T Manager password for the private cloud
	NsxtPassword pulumi.StringPtrInput
	// Name of the private cloud
	PrivateCloudName pulumi.StringInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The private cloud SKU
	Sku SkuInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Indicate to rotate the vCenter admin password for the private cloud
	VcenterPassword pulumi.StringPtrInput
}

func (PrivateCloudArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*privateCloudArgs)(nil)).Elem()
}

type PrivateCloudInput interface {
	pulumi.Input

	ToPrivateCloudOutput() PrivateCloudOutput
	ToPrivateCloudOutputWithContext(ctx context.Context) PrivateCloudOutput
}

func (*PrivateCloud) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateCloud)(nil))
}

func (i *PrivateCloud) ToPrivateCloudOutput() PrivateCloudOutput {
	return i.ToPrivateCloudOutputWithContext(context.Background())
}

func (i *PrivateCloud) ToPrivateCloudOutputWithContext(ctx context.Context) PrivateCloudOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PrivateCloudOutput)
}

type PrivateCloudOutput struct {
	*pulumi.OutputState
}

func (PrivateCloudOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateCloud)(nil))
}

func (o PrivateCloudOutput) ToPrivateCloudOutput() PrivateCloudOutput {
	return o
}

func (o PrivateCloudOutput) ToPrivateCloudOutputWithContext(ctx context.Context) PrivateCloudOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PrivateCloudOutput{})
}
