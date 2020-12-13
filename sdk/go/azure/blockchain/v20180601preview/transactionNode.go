// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Payload of the transaction node which is the request/response of the resource provider.
type TransactionNode struct {
	pulumi.CustomResourceState

	// Gets or sets the transaction node dns endpoint.
	Dns pulumi.StringOutput `pulumi:"dns"`
	// Gets or sets the firewall rules.
	FirewallRules FirewallRuleResponseArrayOutput `pulumi:"firewallRules"`
	// Gets or sets the transaction node location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// Sets the transaction node dns endpoint basic auth password.
	Password pulumi.StringPtrOutput `pulumi:"password"`
	// Gets or sets the blockchain member provision state.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Gets or sets the transaction node public key.
	PublicKey pulumi.StringOutput `pulumi:"publicKey"`
	// The type of the service - e.g. "Microsoft.Blockchain"
	Type pulumi.StringOutput `pulumi:"type"`
	// Gets or sets the transaction node dns endpoint basic auth user name.
	UserName pulumi.StringOutput `pulumi:"userName"`
}

// NewTransactionNode registers a new resource with the given unique name, arguments, and options.
func NewTransactionNode(ctx *pulumi.Context,
	name string, args *TransactionNodeArgs, opts ...pulumi.ResourceOption) (*TransactionNode, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.BlockchainMemberName == nil {
		return nil, errors.New("invalid value for required argument 'BlockchainMemberName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.TransactionNodeName == nil {
		return nil, errors.New("invalid value for required argument 'TransactionNodeName'")
	}
	var resource TransactionNode
	err := ctx.RegisterResource("azure-nextgen:blockchain/v20180601preview:TransactionNode", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetTransactionNode gets an existing TransactionNode resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTransactionNode(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *TransactionNodeState, opts ...pulumi.ResourceOption) (*TransactionNode, error) {
	var resource TransactionNode
	err := ctx.ReadResource("azure-nextgen:blockchain/v20180601preview:TransactionNode", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering TransactionNode resources.
type transactionNodeState struct {
	// Gets or sets the transaction node dns endpoint.
	Dns *string `pulumi:"dns"`
	// Gets or sets the firewall rules.
	FirewallRules []FirewallRuleResponse `pulumi:"firewallRules"`
	// Gets or sets the transaction node location.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// Sets the transaction node dns endpoint basic auth password.
	Password *string `pulumi:"password"`
	// Gets or sets the blockchain member provision state.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Gets or sets the transaction node public key.
	PublicKey *string `pulumi:"publicKey"`
	// The type of the service - e.g. "Microsoft.Blockchain"
	Type *string `pulumi:"type"`
	// Gets or sets the transaction node dns endpoint basic auth user name.
	UserName *string `pulumi:"userName"`
}

type TransactionNodeState struct {
	// Gets or sets the transaction node dns endpoint.
	Dns pulumi.StringPtrInput
	// Gets or sets the firewall rules.
	FirewallRules FirewallRuleResponseArrayInput
	// Gets or sets the transaction node location.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// Sets the transaction node dns endpoint basic auth password.
	Password pulumi.StringPtrInput
	// Gets or sets the blockchain member provision state.
	ProvisioningState pulumi.StringPtrInput
	// Gets or sets the transaction node public key.
	PublicKey pulumi.StringPtrInput
	// The type of the service - e.g. "Microsoft.Blockchain"
	Type pulumi.StringPtrInput
	// Gets or sets the transaction node dns endpoint basic auth user name.
	UserName pulumi.StringPtrInput
}

func (TransactionNodeState) ElementType() reflect.Type {
	return reflect.TypeOf((*transactionNodeState)(nil)).Elem()
}

type transactionNodeArgs struct {
	// Blockchain member name.
	BlockchainMemberName string `pulumi:"blockchainMemberName"`
	// Gets or sets the firewall rules.
	FirewallRules []FirewallRule `pulumi:"firewallRules"`
	// Gets or sets the transaction node location.
	Location *string `pulumi:"location"`
	// Sets the transaction node dns endpoint basic auth password.
	Password *string `pulumi:"password"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Transaction node name.
	TransactionNodeName string `pulumi:"transactionNodeName"`
}

// The set of arguments for constructing a TransactionNode resource.
type TransactionNodeArgs struct {
	// Blockchain member name.
	BlockchainMemberName pulumi.StringInput
	// Gets or sets the firewall rules.
	FirewallRules FirewallRuleArrayInput
	// Gets or sets the transaction node location.
	Location pulumi.StringPtrInput
	// Sets the transaction node dns endpoint basic auth password.
	Password pulumi.StringPtrInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// Transaction node name.
	TransactionNodeName pulumi.StringInput
}

func (TransactionNodeArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*transactionNodeArgs)(nil)).Elem()
}

type TransactionNodeInput interface {
	pulumi.Input

	ToTransactionNodeOutput() TransactionNodeOutput
	ToTransactionNodeOutputWithContext(ctx context.Context) TransactionNodeOutput
}

func (TransactionNode) ElementType() reflect.Type {
	return reflect.TypeOf((*TransactionNode)(nil)).Elem()
}

func (i TransactionNode) ToTransactionNodeOutput() TransactionNodeOutput {
	return i.ToTransactionNodeOutputWithContext(context.Background())
}

func (i TransactionNode) ToTransactionNodeOutputWithContext(ctx context.Context) TransactionNodeOutput {
	return pulumi.ToOutputWithContext(ctx, i).(TransactionNodeOutput)
}

type TransactionNodeOutput struct {
	*pulumi.OutputState
}

func (TransactionNodeOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*TransactionNodeOutput)(nil)).Elem()
}

func (o TransactionNodeOutput) ToTransactionNodeOutput() TransactionNodeOutput {
	return o
}

func (o TransactionNodeOutput) ToTransactionNodeOutputWithContext(ctx context.Context) TransactionNodeOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(TransactionNodeOutput{})
}
