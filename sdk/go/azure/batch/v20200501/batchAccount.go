// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200501

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Contains information about an Azure Batch account.
type BatchAccount struct {
	pulumi.CustomResourceState

	// The account endpoint used to interact with the Batch service.
	AccountEndpoint              pulumi.StringOutput `pulumi:"accountEndpoint"`
	ActiveJobAndJobScheduleQuota pulumi.IntOutput    `pulumi:"activeJobAndJobScheduleQuota"`
	// Contains information about the auto-storage account associated with a Batch account.
	AutoStorage AutoStoragePropertiesResponseOutput `pulumi:"autoStorage"`
	// For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
	DedicatedCoreQuota pulumi.IntOutput `pulumi:"dedicatedCoreQuota"`
	// A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
	DedicatedCoreQuotaPerVMFamily VirtualMachineFamilyCoreQuotaResponseArrayOutput `pulumi:"dedicatedCoreQuotaPerVMFamily"`
	// Batch is transitioning its core quota system for dedicated cores to be enforced per Virtual Machine family. During this transitional phase, the dedicated core quota per Virtual Machine family may not yet be enforced. If this flag is false, dedicated core quota is enforced via the old dedicatedCoreQuota property on the account and does not consider Virtual Machine family. If this flag is true, dedicated core quota is enforced via the dedicatedCoreQuotaPerVMFamily property on the account, and the old dedicatedCoreQuota does not apply.
	DedicatedCoreQuotaPerVMFamilyEnforced pulumi.BoolOutput `pulumi:"dedicatedCoreQuotaPerVMFamilyEnforced"`
	// Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
	Encryption EncryptionPropertiesResponseOutput `pulumi:"encryption"`
	// The identity of the Batch account.
	Identity BatchAccountIdentityResponsePtrOutput `pulumi:"identity"`
	// Identifies the Azure key vault associated with a Batch account.
	KeyVaultReference KeyVaultReferenceResponseOutput `pulumi:"keyVaultReference"`
	// The location of the resource.
	Location pulumi.StringOutput `pulumi:"location"`
	// For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
	LowPriorityCoreQuota pulumi.IntOutput `pulumi:"lowPriorityCoreQuota"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The allocation mode for creating pools in the Batch account.
	PoolAllocationMode pulumi.StringOutput `pulumi:"poolAllocationMode"`
	PoolQuota          pulumi.IntOutput    `pulumi:"poolQuota"`
	// List of private endpoint connections associated with the Batch account
	PrivateEndpointConnections PrivateEndpointConnectionResponseArrayOutput `pulumi:"privateEndpointConnections"`
	// The provisioned state of the resource
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// If not specified, the default value is 'enabled'.
	PublicNetworkAccess pulumi.StringOutput `pulumi:"publicNetworkAccess"`
	// The tags of the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewBatchAccount registers a new resource with the given unique name, arguments, and options.
func NewBatchAccount(ctx *pulumi.Context,
	name string, args *BatchAccountArgs, opts ...pulumi.ResourceOption) (*BatchAccount, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:batch/latest:BatchAccount"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20151201:BatchAccount"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20170101:BatchAccount"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20170501:BatchAccount"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20170901:BatchAccount"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20181201:BatchAccount"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20190401:BatchAccount"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20190801:BatchAccount"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20200301:BatchAccount"),
		},
		{
			Type: pulumi.String("azure-nextgen:batch/v20200901:BatchAccount"),
		},
	})
	opts = append(opts, aliases)
	var resource BatchAccount
	err := ctx.RegisterResource("azure-nextgen:batch/v20200501:BatchAccount", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetBatchAccount gets an existing BatchAccount resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetBatchAccount(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *BatchAccountState, opts ...pulumi.ResourceOption) (*BatchAccount, error) {
	var resource BatchAccount
	err := ctx.ReadResource("azure-nextgen:batch/v20200501:BatchAccount", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering BatchAccount resources.
type batchAccountState struct {
	// The account endpoint used to interact with the Batch service.
	AccountEndpoint              *string `pulumi:"accountEndpoint"`
	ActiveJobAndJobScheduleQuota *int    `pulumi:"activeJobAndJobScheduleQuota"`
	// Contains information about the auto-storage account associated with a Batch account.
	AutoStorage *AutoStoragePropertiesResponse `pulumi:"autoStorage"`
	// For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
	DedicatedCoreQuota *int `pulumi:"dedicatedCoreQuota"`
	// A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
	DedicatedCoreQuotaPerVMFamily []VirtualMachineFamilyCoreQuotaResponse `pulumi:"dedicatedCoreQuotaPerVMFamily"`
	// Batch is transitioning its core quota system for dedicated cores to be enforced per Virtual Machine family. During this transitional phase, the dedicated core quota per Virtual Machine family may not yet be enforced. If this flag is false, dedicated core quota is enforced via the old dedicatedCoreQuota property on the account and does not consider Virtual Machine family. If this flag is true, dedicated core quota is enforced via the dedicatedCoreQuotaPerVMFamily property on the account, and the old dedicatedCoreQuota does not apply.
	DedicatedCoreQuotaPerVMFamilyEnforced *bool `pulumi:"dedicatedCoreQuotaPerVMFamilyEnforced"`
	// Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
	Encryption *EncryptionPropertiesResponse `pulumi:"encryption"`
	// The identity of the Batch account.
	Identity *BatchAccountIdentityResponse `pulumi:"identity"`
	// Identifies the Azure key vault associated with a Batch account.
	KeyVaultReference *KeyVaultReferenceResponse `pulumi:"keyVaultReference"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
	LowPriorityCoreQuota *int `pulumi:"lowPriorityCoreQuota"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The allocation mode for creating pools in the Batch account.
	PoolAllocationMode *string `pulumi:"poolAllocationMode"`
	PoolQuota          *int    `pulumi:"poolQuota"`
	// List of private endpoint connections associated with the Batch account
	PrivateEndpointConnections []PrivateEndpointConnectionResponse `pulumi:"privateEndpointConnections"`
	// The provisioned state of the resource
	ProvisioningState *string `pulumi:"provisioningState"`
	// If not specified, the default value is 'enabled'.
	PublicNetworkAccess *string `pulumi:"publicNetworkAccess"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type BatchAccountState struct {
	// The account endpoint used to interact with the Batch service.
	AccountEndpoint              pulumi.StringPtrInput
	ActiveJobAndJobScheduleQuota pulumi.IntPtrInput
	// Contains information about the auto-storage account associated with a Batch account.
	AutoStorage AutoStoragePropertiesResponsePtrInput
	// For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
	DedicatedCoreQuota pulumi.IntPtrInput
	// A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
	DedicatedCoreQuotaPerVMFamily VirtualMachineFamilyCoreQuotaResponseArrayInput
	// Batch is transitioning its core quota system for dedicated cores to be enforced per Virtual Machine family. During this transitional phase, the dedicated core quota per Virtual Machine family may not yet be enforced. If this flag is false, dedicated core quota is enforced via the old dedicatedCoreQuota property on the account and does not consider Virtual Machine family. If this flag is true, dedicated core quota is enforced via the dedicatedCoreQuotaPerVMFamily property on the account, and the old dedicatedCoreQuota does not apply.
	DedicatedCoreQuotaPerVMFamilyEnforced pulumi.BoolPtrInput
	// Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
	Encryption EncryptionPropertiesResponsePtrInput
	// The identity of the Batch account.
	Identity BatchAccountIdentityResponsePtrInput
	// Identifies the Azure key vault associated with a Batch account.
	KeyVaultReference KeyVaultReferenceResponsePtrInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
	LowPriorityCoreQuota pulumi.IntPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The allocation mode for creating pools in the Batch account.
	PoolAllocationMode pulumi.StringPtrInput
	PoolQuota          pulumi.IntPtrInput
	// List of private endpoint connections associated with the Batch account
	PrivateEndpointConnections PrivateEndpointConnectionResponseArrayInput
	// The provisioned state of the resource
	ProvisioningState pulumi.StringPtrInput
	// If not specified, the default value is 'enabled'.
	PublicNetworkAccess pulumi.StringPtrInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (BatchAccountState) ElementType() reflect.Type {
	return reflect.TypeOf((*batchAccountState)(nil)).Elem()
}

type batchAccountArgs struct {
	// A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
	AccountName string `pulumi:"accountName"`
	// The properties related to the auto-storage account.
	AutoStorage *AutoStorageBaseProperties `pulumi:"autoStorage"`
	// Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
	Encryption *EncryptionProperties `pulumi:"encryption"`
	// The identity of the Batch account.
	Identity *BatchAccountIdentity `pulumi:"identity"`
	// A reference to the Azure key vault associated with the Batch account.
	KeyVaultReference *KeyVaultReference `pulumi:"keyVaultReference"`
	// The region in which to create the account.
	Location string `pulumi:"location"`
	// The pool allocation mode also affects how clients may authenticate to the Batch Service API. If the mode is BatchService, clients may authenticate using access keys or Azure Active Directory. If the mode is UserSubscription, clients must use Azure Active Directory. The default is BatchService.
	PoolAllocationMode *string `pulumi:"poolAllocationMode"`
	// If not specified, the default value is 'enabled'.
	PublicNetworkAccess *string `pulumi:"publicNetworkAccess"`
	// The name of the resource group that contains the Batch account.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The user-specified tags associated with the account.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a BatchAccount resource.
type BatchAccountArgs struct {
	// A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
	AccountName pulumi.StringInput
	// The properties related to the auto-storage account.
	AutoStorage AutoStorageBasePropertiesPtrInput
	// Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
	Encryption EncryptionPropertiesPtrInput
	// The identity of the Batch account.
	Identity BatchAccountIdentityPtrInput
	// A reference to the Azure key vault associated with the Batch account.
	KeyVaultReference KeyVaultReferencePtrInput
	// The region in which to create the account.
	Location pulumi.StringInput
	// The pool allocation mode also affects how clients may authenticate to the Batch Service API. If the mode is BatchService, clients may authenticate using access keys or Azure Active Directory. If the mode is UserSubscription, clients must use Azure Active Directory. The default is BatchService.
	PoolAllocationMode PoolAllocationMode
	// If not specified, the default value is 'enabled'.
	PublicNetworkAccess PublicNetworkAccessType
	// The name of the resource group that contains the Batch account.
	ResourceGroupName pulumi.StringInput
	// The user-specified tags associated with the account.
	Tags pulumi.StringMapInput
}

func (BatchAccountArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*batchAccountArgs)(nil)).Elem()
}

type BatchAccountInput interface {
	pulumi.Input

	ToBatchAccountOutput() BatchAccountOutput
	ToBatchAccountOutputWithContext(ctx context.Context) BatchAccountOutput
}

func (BatchAccount) ElementType() reflect.Type {
	return reflect.TypeOf((*BatchAccount)(nil)).Elem()
}

func (i BatchAccount) ToBatchAccountOutput() BatchAccountOutput {
	return i.ToBatchAccountOutputWithContext(context.Background())
}

func (i BatchAccount) ToBatchAccountOutputWithContext(ctx context.Context) BatchAccountOutput {
	return pulumi.ToOutputWithContext(ctx, i).(BatchAccountOutput)
}

type BatchAccountOutput struct {
	*pulumi.OutputState
}

func (BatchAccountOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*BatchAccountOutput)(nil)).Elem()
}

func (o BatchAccountOutput) ToBatchAccountOutput() BatchAccountOutput {
	return o
}

func (o BatchAccountOutput) ToBatchAccountOutputWithContext(ctx context.Context) BatchAccountOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(BatchAccountOutput{})
}
