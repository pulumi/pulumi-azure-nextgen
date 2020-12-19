// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150521preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A lab.
type LabResource struct {
	pulumi.CustomResourceState

	// The artifact storage account of the lab.
	ArtifactsStorageAccount pulumi.StringPtrOutput `pulumi:"artifactsStorageAccount"`
	// The creation date of the lab.
	CreatedDate pulumi.StringPtrOutput `pulumi:"createdDate"`
	// The lab's default storage account.
	DefaultStorageAccount pulumi.StringPtrOutput `pulumi:"defaultStorageAccount"`
	// The default virtual network identifier of the lab.
	DefaultVirtualNetworkId pulumi.StringPtrOutput `pulumi:"defaultVirtualNetworkId"`
	// The type of the lab storage.
	LabStorageType pulumi.StringPtrOutput `pulumi:"labStorageType"`
	// The location of the resource.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// The storage accounts of the lab.
	StorageAccounts pulumi.StringArrayOutput `pulumi:"storageAccounts"`
	// The tags of the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource.
	Type pulumi.StringPtrOutput `pulumi:"type"`
	// The name of the key vault of the lab.
	VaultName pulumi.StringPtrOutput `pulumi:"vaultName"`
}

// NewLabResource registers a new resource with the given unique name, arguments, and options.
func NewLabResource(ctx *pulumi.Context,
	name string, args *LabResourceArgs, opts ...pulumi.ResourceOption) (*LabResource, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:devtestlab/latest:LabResource"),
		},
		{
			Type: pulumi.String("azure-nextgen:devtestlab/v20160515:LabResource"),
		},
		{
			Type: pulumi.String("azure-nextgen:devtestlab/v20180915:LabResource"),
		},
	})
	opts = append(opts, aliases)
	var resource LabResource
	err := ctx.RegisterResource("azure-nextgen:devtestlab/v20150521preview:LabResource", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetLabResource gets an existing LabResource resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLabResource(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *LabResourceState, opts ...pulumi.ResourceOption) (*LabResource, error) {
	var resource LabResource
	err := ctx.ReadResource("azure-nextgen:devtestlab/v20150521preview:LabResource", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering LabResource resources.
type labResourceState struct {
	// The artifact storage account of the lab.
	ArtifactsStorageAccount *string `pulumi:"artifactsStorageAccount"`
	// The creation date of the lab.
	CreatedDate *string `pulumi:"createdDate"`
	// The lab's default storage account.
	DefaultStorageAccount *string `pulumi:"defaultStorageAccount"`
	// The default virtual network identifier of the lab.
	DefaultVirtualNetworkId *string `pulumi:"defaultVirtualNetworkId"`
	// The type of the lab storage.
	LabStorageType *string `pulumi:"labStorageType"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The provisioning status of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The storage accounts of the lab.
	StorageAccounts []string `pulumi:"storageAccounts"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type *string `pulumi:"type"`
	// The name of the key vault of the lab.
	VaultName *string `pulumi:"vaultName"`
}

type LabResourceState struct {
	// The artifact storage account of the lab.
	ArtifactsStorageAccount pulumi.StringPtrInput
	// The creation date of the lab.
	CreatedDate pulumi.StringPtrInput
	// The lab's default storage account.
	DefaultStorageAccount pulumi.StringPtrInput
	// The default virtual network identifier of the lab.
	DefaultVirtualNetworkId pulumi.StringPtrInput
	// The type of the lab storage.
	LabStorageType pulumi.StringPtrInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringPtrInput
	// The storage accounts of the lab.
	StorageAccounts pulumi.StringArrayInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The type of the resource.
	Type pulumi.StringPtrInput
	// The name of the key vault of the lab.
	VaultName pulumi.StringPtrInput
}

func (LabResourceState) ElementType() reflect.Type {
	return reflect.TypeOf((*labResourceState)(nil)).Elem()
}

type labResourceArgs struct {
	// The artifact storage account of the lab.
	ArtifactsStorageAccount *string `pulumi:"artifactsStorageAccount"`
	// The creation date of the lab.
	CreatedDate *string `pulumi:"createdDate"`
	// The lab's default storage account.
	DefaultStorageAccount *string `pulumi:"defaultStorageAccount"`
	// The default virtual network identifier of the lab.
	DefaultVirtualNetworkId *string `pulumi:"defaultVirtualNetworkId"`
	// The identifier of the resource.
	Id *string `pulumi:"id"`
	// The type of the lab storage.
	LabStorageType *string `pulumi:"labStorageType"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// The provisioning status of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The storage accounts of the lab.
	StorageAccounts []string `pulumi:"storageAccounts"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type *string `pulumi:"type"`
	// The name of the key vault of the lab.
	VaultName *string `pulumi:"vaultName"`
}

// The set of arguments for constructing a LabResource resource.
type LabResourceArgs struct {
	// The artifact storage account of the lab.
	ArtifactsStorageAccount pulumi.StringPtrInput
	// The creation date of the lab.
	CreatedDate pulumi.StringPtrInput
	// The lab's default storage account.
	DefaultStorageAccount pulumi.StringPtrInput
	// The default virtual network identifier of the lab.
	DefaultVirtualNetworkId pulumi.StringPtrInput
	// The identifier of the resource.
	Id pulumi.StringPtrInput
	// The type of the lab storage.
	LabStorageType pulumi.StringPtrInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringInput
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The storage accounts of the lab.
	StorageAccounts pulumi.StringArrayInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The type of the resource.
	Type pulumi.StringPtrInput
	// The name of the key vault of the lab.
	VaultName pulumi.StringPtrInput
}

func (LabResourceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*labResourceArgs)(nil)).Elem()
}

type LabResourceInput interface {
	pulumi.Input

	ToLabResourceOutput() LabResourceOutput
	ToLabResourceOutputWithContext(ctx context.Context) LabResourceOutput
}

func (*LabResource) ElementType() reflect.Type {
	return reflect.TypeOf((*LabResource)(nil))
}

func (i *LabResource) ToLabResourceOutput() LabResourceOutput {
	return i.ToLabResourceOutputWithContext(context.Background())
}

func (i *LabResource) ToLabResourceOutputWithContext(ctx context.Context) LabResourceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(LabResourceOutput)
}

type LabResourceOutput struct {
	*pulumi.OutputState
}

func (LabResourceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LabResource)(nil))
}

func (o LabResourceOutput) ToLabResourceOutput() LabResourceOutput {
	return o
}

func (o LabResourceOutput) ToLabResourceOutputWithContext(ctx context.Context) LabResourceOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(LabResourceOutput{})
}
