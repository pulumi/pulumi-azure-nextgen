// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The top level storage insight resource container.
type StorageInsightConfig struct {
	pulumi.CustomResourceState

	// The names of the blob containers that the workspace should read
	Containers pulumi.StringArrayOutput `pulumi:"containers"`
	// The ETag of the storage insight.
	ETag pulumi.StringPtrOutput `pulumi:"eTag"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// The status of the storage insight
	Status StorageInsightStatusResponseOutput `pulumi:"status"`
	// The storage account connection details
	StorageAccount StorageAccountResponseOutput `pulumi:"storageAccount"`
	// The names of the Azure tables that the workspace should read
	Tables pulumi.StringArrayOutput `pulumi:"tables"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewStorageInsightConfig registers a new resource with the given unique name, arguments, and options.
func NewStorageInsightConfig(ctx *pulumi.Context,
	name string, args *StorageInsightConfigArgs, opts ...pulumi.ResourceOption) (*StorageInsightConfig, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.StorageAccount == nil {
		return nil, errors.New("invalid value for required argument 'StorageAccount'")
	}
	if args.StorageInsightName == nil {
		return nil, errors.New("invalid value for required argument 'StorageInsightName'")
	}
	if args.WorkspaceName == nil {
		return nil, errors.New("invalid value for required argument 'WorkspaceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:operationalinsights/latest:StorageInsightConfig"),
		},
		{
			Type: pulumi.String("azure-nextgen:operationalinsights/v20150320:StorageInsightConfig"),
		},
		{
			Type: pulumi.String("azure-nextgen:operationalinsights/v20200301preview:StorageInsightConfig"),
		},
	})
	opts = append(opts, aliases)
	var resource StorageInsightConfig
	err := ctx.RegisterResource("azure-nextgen:operationalinsights/v20200801:StorageInsightConfig", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetStorageInsightConfig gets an existing StorageInsightConfig resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetStorageInsightConfig(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *StorageInsightConfigState, opts ...pulumi.ResourceOption) (*StorageInsightConfig, error) {
	var resource StorageInsightConfig
	err := ctx.ReadResource("azure-nextgen:operationalinsights/v20200801:StorageInsightConfig", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering StorageInsightConfig resources.
type storageInsightConfigState struct {
	// The names of the blob containers that the workspace should read
	Containers []string `pulumi:"containers"`
	// The ETag of the storage insight.
	ETag *string `pulumi:"eTag"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The status of the storage insight
	Status *StorageInsightStatusResponse `pulumi:"status"`
	// The storage account connection details
	StorageAccount *StorageAccountResponse `pulumi:"storageAccount"`
	// The names of the Azure tables that the workspace should read
	Tables []string `pulumi:"tables"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type StorageInsightConfigState struct {
	// The names of the blob containers that the workspace should read
	Containers pulumi.StringArrayInput
	// The ETag of the storage insight.
	ETag pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The status of the storage insight
	Status StorageInsightStatusResponsePtrInput
	// The storage account connection details
	StorageAccount StorageAccountResponsePtrInput
	// The names of the Azure tables that the workspace should read
	Tables pulumi.StringArrayInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (StorageInsightConfigState) ElementType() reflect.Type {
	return reflect.TypeOf((*storageInsightConfigState)(nil)).Elem()
}

type storageInsightConfigArgs struct {
	// The names of the blob containers that the workspace should read
	Containers []string `pulumi:"containers"`
	// The ETag of the storage insight.
	ETag *string `pulumi:"eTag"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The storage account connection details
	StorageAccount StorageAccount `pulumi:"storageAccount"`
	// Name of the storageInsightsConfigs resource
	StorageInsightName string `pulumi:"storageInsightName"`
	// The names of the Azure tables that the workspace should read
	Tables []string `pulumi:"tables"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The name of the workspace.
	WorkspaceName string `pulumi:"workspaceName"`
}

// The set of arguments for constructing a StorageInsightConfig resource.
type StorageInsightConfigArgs struct {
	// The names of the blob containers that the workspace should read
	Containers pulumi.StringArrayInput
	// The ETag of the storage insight.
	ETag pulumi.StringPtrInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The storage account connection details
	StorageAccount StorageAccountInput
	// Name of the storageInsightsConfigs resource
	StorageInsightName pulumi.StringInput
	// The names of the Azure tables that the workspace should read
	Tables pulumi.StringArrayInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The name of the workspace.
	WorkspaceName pulumi.StringInput
}

func (StorageInsightConfigArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*storageInsightConfigArgs)(nil)).Elem()
}

type StorageInsightConfigInput interface {
	pulumi.Input

	ToStorageInsightConfigOutput() StorageInsightConfigOutput
	ToStorageInsightConfigOutputWithContext(ctx context.Context) StorageInsightConfigOutput
}

func (*StorageInsightConfig) ElementType() reflect.Type {
	return reflect.TypeOf((*StorageInsightConfig)(nil))
}

func (i *StorageInsightConfig) ToStorageInsightConfigOutput() StorageInsightConfigOutput {
	return i.ToStorageInsightConfigOutputWithContext(context.Background())
}

func (i *StorageInsightConfig) ToStorageInsightConfigOutputWithContext(ctx context.Context) StorageInsightConfigOutput {
	return pulumi.ToOutputWithContext(ctx, i).(StorageInsightConfigOutput)
}

type StorageInsightConfigOutput struct {
	*pulumi.OutputState
}

func (StorageInsightConfigOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*StorageInsightConfig)(nil))
}

func (o StorageInsightConfigOutput) ToStorageInsightConfigOutput() StorageInsightConfigOutput {
	return o
}

func (o StorageInsightConfigOutput) ToStorageInsightConfigOutputWithContext(ctx context.Context) StorageInsightConfigOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(StorageInsightConfigOutput{})
}
